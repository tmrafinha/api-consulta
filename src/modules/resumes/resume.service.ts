import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from "@nestjs/common";
import { ResumeRepository } from "./resume.repository";
import { ResumeQueryDto } from "./schemas/resume-query.schema";
import { JwtPayload } from "../auth/strategies/jwt.dto";
import { buildPaginationResponse } from "src/common/pagination/pagination.util";
import { S3StorageService } from "src/shared/storage/s3-storage.service";

@Injectable()
export class ResumeService {
  constructor(
    private repo: ResumeRepository,
    private storage: S3StorageService,
  ) {}

  async upload(file: Express.Multer.File, user: JwtPayload) {
    if (!file) {
      throw new ForbiddenException("Arquivo é obrigatório");
    }

    const { key } = await this.storage.upload(file, `resumes/${user.sub}`);

    const resume = await this.repo.create({
      userId: user.sub,
      filename: file.originalname,
      originalName: file.originalname,
      mimeType: file.mimetype,
      size: file.size,
      storageUrl: key,
    });

    return resume;
  }

  async findAll(query: ResumeQueryDto, user: JwtPayload) {
    const { page, limit, search, sortBy, sortOrder } = query;

    const pagination = {
      skip: (page - 1) * limit,
      take: limit,
    };

    const filters: any = {
      userId: user.sub,
      deletedAt: null,
    };

    if (search) {
      filters.OR = [
        { originalName: { contains: search, mode: "insensitive" } },
        { filename: { contains: search, mode: "insensitive" } },
      ];
    }

    const { items, total } = await this.repo.findAll({
      pagination,
      filters,
      sortBy,
      sortOrder,
    });

    return buildPaginationResponse(items, total, page, limit);
  }

  async getDownloadUrl(id: string, user: JwtPayload) {
    const resume = await this.repo.findById(id);
    if (!resume || resume.deletedAt) {
      throw new NotFoundException("Currículo não encontrado.");
    }

    if (resume.userId !== user.sub) {
      throw new ForbiddenException("Você não tem acesso a este currículo.");
    }

    const url = await this.storage.getSignedUrl(resume.storageUrl);
    return { url };
  }

  async delete(id: string, user: JwtPayload) {
    const resume = await this.repo.findById(id);
    if (!resume || resume.deletedAt) {
      throw new NotFoundException("Currículo não encontrado.");
    }

    if (resume.userId !== user.sub) {
      throw new ForbiddenException("Você não tem acesso a este currículo.");
    }

    await this.storage.delete(resume.storageUrl);

    return this.repo.softDelete(id);
  }
}