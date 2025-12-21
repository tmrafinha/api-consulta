import {
  Injectable,
  ConflictException,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { CompanyRepository } from "./company.repository";
import { CreateCompanyDto } from "./schemas/create-company.schema";
import { UpdateCompanyDto } from "./schemas/update-company.schema";
import { buildPaginationResponse } from "src/common/pagination/pagination.util";
import { CompanyQueryDto } from "./schemas/company-query.schema";
import { S3StorageService } from "src/shared/storage/s3-storage.service";

@Injectable()
export class CompanyService {
  constructor(
    private readonly repo: CompanyRepository,
    private readonly storage: S3StorageService,
  ) {}

  async create(dto: CreateCompanyDto) {
    const existing = await this.repo.findByName(dto.name);

    if (existing) {
      throw new ConflictException("Já existe uma empresa com esse nome.");
    }

    return this.repo.create(dto);
  }

  async update(id: string, dto: UpdateCompanyDto) {
    const company = await this.repo.findById(id);
    if (!company) {
      throw new NotFoundException("Empresa não encontrada.");
    }

    return this.repo.update(id, dto);
  }

  async findById(id: string) {
    const company = await this.repo.findById(id);
    if (!company) {
      throw new NotFoundException("Empresa não encontrada.");
    }
    // logoUrl já é URL completa
    return company;
  }

  async findAll(query: CompanyQueryDto) {
    const { page, limit, size, industry, search, sortBy, sortOrder } = query;

    const pagination = {
      skip: (page - 1) * limit,
      take: limit,
    };

    const filters: any = {};

    if (size) filters.size = size;
    if (industry) filters.industry = industry;
    if (search) {
      filters.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ];
    }

    const { items, total } = await this.repo.findAll({
      pagination,
      filters,
      sortBy,
      sortOrder,
    });

    // items já vêm com logoUrl pronta pra usar
    return buildPaginationResponse(items, total, page, limit);
  }

  async delete(id: string) {
    const company = await this.repo.findById(id);
    if (!company) {
      throw new NotFoundException("Empresa não encontrada.");
    }

    if (company.logoUrl) {
      await this.storage.deleteByUrl(company.logoUrl);
    }

    return this.repo.delete(id);
  }

  // ---------- LOGO ----------

  async uploadLogo(id: string, file: Express.Multer.File) {
   try {
     if (!file) {
      throw new BadRequestException("Arquivo de logo é obrigatório.");
    }

    const company = await this.repo.findById(id);
    if (!company) {
      throw new NotFoundException("Empresa não encontrada.");
    }

    if (company.logoUrl) {
      await this.storage.deleteByUrl(company.logoUrl);
    }

    const { url } = await this.storage.upload(file, `companies/${id}/logo`);

    const updated = await this.repo.update(id, {
      logoUrl: url, // salva a URL compxweta
    });

    return updated;
   } catch (error) {
    console.log(error)
   }
  }

  async getLogoUrl(id: string) {
    const company = await this.repo.findById(id);
    if (!company) {
      throw new NotFoundException("Empresa não encontrada.");
    }

    if (!company.logoUrl) {
      throw new NotFoundException("Empresa não possui logo cadastrada.");
    }

    // como logoUrl já é URL pública, só devolve
    return { url: company.logoUrl };
  }

  async removeLogo(id: string) {
    const company = await this.repo.findById(id);
    if (!company) {
      throw new NotFoundException("Empresa não encontrada.");
    }

    if (company.logoUrl) {
      await this.storage.deleteByUrl(company.logoUrl);
    }

    return this.repo.update(id, {
      logoUrl: null,
    });
  }
}