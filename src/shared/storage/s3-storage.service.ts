import { Injectable, Inject, InternalServerErrorException } from "@nestjs/common";
import { PutObjectCommand, DeleteObjectCommand, GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { randomUUID } from "crypto";
import { AWS_S3_CLIENT } from "src/shared/storage/aws-s3.client";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class S3StorageService {
  constructor(
    @Inject(AWS_S3_CLIENT)
    private readonly s3: S3Client,
    private readonly config: ConfigService,
  ) {}

  private get bucket(): string {
    const bucket = this.config.get<string>("AWS_S3_BUCKET");
    if (!bucket) {
      throw new Error("AWS_S3_BUCKET não definido no .env");
    }
    return bucket;
  }

  private buildPublicUrl(key: string): string {
    const customBase = this.config.get<string>("AWS_S3_PUBLIC_BASE_URL");
    if (customBase) {
      return `${customBase}/${key}`;
    }
    return `https://${this.bucket}.s3.amazonaws.com/${key}`;
  }

  private extractKeyFromUrl(url: string): string {
    const customBase = this.config.get<string>("AWS_S3_PUBLIC_BASE_URL");
    if (customBase && url.startsWith(customBase)) {
      return url.replace(customBase + "/", "");
    }

    const bucketBase = `https://${this.bucket}.s3.amazonaws.com/`;
    if (url.startsWith(bucketBase)) {
      return url.replace(bucketBase, "");
    }

    const parsed = new URL(url);
    return parsed.pathname.replace(/^\/+/, "");
  }

  async upload(file: Express.Multer.File, prefix: string): Promise<{ key: string; url: string }> {
    const key = `${prefix}/${Date.now()}-${randomUUID()}-${file.originalname}`;

    try {
      await this.s3.send(
        new PutObjectCommand({
          Bucket: this.bucket,
          Key: key,
          Body: file.buffer,
          ContentType: file.mimetype,
        }),
      );
    } catch (error) {
      console.error("S3 Upload Error:", error);
      throw new InternalServerErrorException("Erro ao enviar arquivo ao S3");
    }

    const url = this.buildPublicUrl(key);
    return { key, url };
  }

  async delete(key: string): Promise<void> {
    try {
      await this.s3.send(
        new DeleteObjectCommand({
          Bucket: this.bucket,
          Key: key,
        }),
      );
    } catch (error) {
      console.error("S3 Delete Error:", error);
      throw new InternalServerErrorException("Erro ao remover arquivo do S3");
    }
  }

  async deleteByUrl(url: string): Promise<void> {
    const key = this.extractKeyFromUrl(url);
    await this.delete(key);
  }

  async getSignedUrl(key: string, expiresInSeconds = 300): Promise<string> {
    try {
      const command = new GetObjectCommand({
        Bucket: this.bucket,
        Key: key,
      });

      return await getSignedUrl(this.s3, command, {
        expiresIn: expiresInSeconds,
      });
    } catch (error) {
      console.error("S3 Signed URL Error:", error);
      throw new InternalServerErrorException("Erro ao gerar URL de download do S3");
    }
  }
}