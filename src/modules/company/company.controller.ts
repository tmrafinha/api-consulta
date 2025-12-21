import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Query,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import {
  ApiTags,
  ApiBody,
  ApiQuery,
  ApiConsumes,
} from "@nestjs/swagger";

import { FileInterceptor } from "@nestjs/platform-express";

import { CompanyService } from "./company.service";
import {
  CreateCompanySchema,
  CreateCompanyDto,
} from "./schemas/create-company.schema";
import {
  UpdateCompanySchema,
  UpdateCompanyDto,
} from "./schemas/update-company.schema";

import { ZodValidationPipe } from "src/common/pipes/zod-validation.pipe";
import { Roles } from "../auth/decorators/roles.decorator";
import { UserRole } from "@prisma/client";
import {
  CompanyQueryDto,
  CompanyQuerySchema,
} from "./schemas/company-query.schema";

import { CreateCompanySwaggerDto } from "./swagger/create-company.swagger.dto";
import { UpdateCompanySwaggerDto } from "./swagger/update-company.swagger.dto";
import { CompanyQuerySwaggerDto } from "./swagger/company-query.swagger.dto";

@ApiTags("Companies")
@Controller("companies")
export class CompanyController {
  constructor(private service: CompanyService) {}

  // @Roles(UserRole.ADMIN, UserRole.COMPANY_ADMIN)
  @Post()
  @ApiBody({ type: CreateCompanySwaggerDto })
  create(
    @Body(new ZodValidationPipe(CreateCompanySchema))
    dto: CreateCompanyDto,
  ) {
    return this.service.create(dto);
  }

  @Roles(UserRole.ADMIN, UserRole.COMPANY_ADMIN)
  @Put(":id")
  @ApiBody({ type: UpdateCompanySwaggerDto })
  update(
    @Param("id") id: string,
    @Body(new ZodValidationPipe(UpdateCompanySchema))
    dto: UpdateCompanyDto,
  ) {
    return this.service.update(id, dto);
  }

  @Get(":id")
  get(@Param("id") id: string) {
    return this.service.findById(id);
  }

  @Get()
  @ApiQuery({ type: CompanyQuerySwaggerDto })
  getAll(
    @Query(new ZodValidationPipe(CompanyQuerySchema))
    query: CompanyQueryDto,
  ) {
    return this.service.findAll(query);
  }

  @Roles(UserRole.ADMIN)
  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.service.delete(id);
  }

  // ---------- LOGO DA EMPRESA ----------

  // @Roles(UserRole.ADMIN, UserRole.COMPANY_ADMIN)
  @Post(":id/logo")
  @UseInterceptors(FileInterceptor("file"))
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        file: {
          type: "string",
          format: "binary",
        },
      },
      required: ["file"],
    },
  })
  uploadLogo(
    @Param("id") id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.service.uploadLogo(id, file);
  }

  @Get(":id/logo")
  getLogo(@Param("id") id: string) {
    return this.service.getLogoUrl(id);
  }

  @Roles(UserRole.ADMIN, UserRole.COMPANY_ADMIN)
  @Delete(":id/logo")
  removeLogo(@Param("id") id: string) {
    return this.service.removeLogo(id);
  }
}