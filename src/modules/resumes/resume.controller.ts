import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Query,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import {
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
} from "@nestjs/common";

import { ApiTags, ApiQuery, ApiConsumes, ApiBody } from "@nestjs/swagger";
import { ResumeUploadSwaggerDto } from "./swagger/resume-upload.swagger.dto";
import { ResumeQuerySwaggerDto } from "./swagger/resume-query.swagger.dto";

import { ResumeService } from "./resume.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { JwtPayload } from "../auth/strategies/jwt.dto";
import {
  ResumeQueryDto,
  ResumeQuerySchema,
} from "./schemas/resume-query.schema";
import { ZodValidationPipe } from "src/common/pipes/zod-validation.pipe";

@ApiTags("Resumes")
@Controller("resumes")
@UseGuards(JwtAuthGuard)
export class ResumeController {
  constructor(private service: ResumeService) {}

  @Post()
  @ApiConsumes("multipart/form-data")
  @ApiBody({ type: ResumeUploadSwaggerDto })
  @UseInterceptors(FileInterceptor("file"))
  upload(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 15 * 1024 * 1024 }),
          new FileTypeValidator({ fileType: "application/pdf" }),
        ],
      }),
    )
    file: Express.Multer.File,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.service.upload(file, user);
  }

  @Get()
  @ApiQuery({ type: ResumeQuerySwaggerDto })
  getAll(
    @Query(new ZodValidationPipe(ResumeQuerySchema)) query: ResumeQueryDto,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.service.findAll(query, user);
  }

  @Get(":id/download")
  getDownloadUrl(@Param("id") id: string, @CurrentUser() user: JwtPayload) {
    return this.service.getDownloadUrl(id, user);
  }

  @Delete(":id")
  delete(@Param("id") id: string, @CurrentUser() user: JwtPayload) {
    return this.service.delete(id, user);
  }
}