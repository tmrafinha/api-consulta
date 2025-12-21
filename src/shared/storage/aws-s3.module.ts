import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { S3Client } from "@aws-sdk/client-s3";

export const AWS_S3_CLIENT = "AWS_S3_CLIENT";

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: AWS_S3_CLIENT,
      useFactory: (config: ConfigService) => {
        const region = config.get<string>("AWS_REGION");
        const bucket = config.get<string>("AWS_S3_BUCKET");
        const accessKeyId = config.get<string>("AWS_ACCESS_KEY_ID");
        const secretAccessKey = config.get<string>("AWS_SECRET_ACCESS_KEY");

        if (!region) throw new Error("AWS_REGION is missing from .env");
        if (!bucket) throw new Error("AWS_S3_BUCKET is missing from .env");
        if (!accessKeyId) throw new Error("AWS_ACCESS_KEY_ID is missing from .env");
        if (!secretAccessKey) throw new Error("AWS_SECRET_ACCESS_KEY is missing from .env");

        return new S3Client({
          region,
          credentials: {
            accessKeyId,
            secretAccessKey,
          },
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: [AWS_S3_CLIENT],
})
export class AwsS3Module {}