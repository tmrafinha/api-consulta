import { Controller, Post, Get, Body, Query, UseGuards } from "@nestjs/common";

import { ApiTags, ApiBody, ApiQuery } from "@nestjs/swagger";

import { ApplicationService } from "./application.service";
import {
  CreateApplicationSchema,
  CreateApplicationDto,
} from "./schemas/create-application.schema";
import { ZodValidationPipe } from "src/common/pipes/zod-validation.pipe";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import {
  ApplicationQueryDto,
  ApplicationQuerySchema,
} from "./schemas/application-query.schema";
import { JwtPayload } from "../auth/strategies/jwt.dto";

import { CreateApplicationSwaggerDto } from "./swagger/create-application.swagger.dto";
import { ApplicationQuerySwaggerDto } from "./swagger/application-query.swagger.dto";

@ApiTags("Applications")
@Controller("applications")
@UseGuards(JwtAuthGuard)
export class ApplicationController {
  constructor(private service: ApplicationService) {}

  @Post()
  @ApiBody({ type: CreateApplicationSwaggerDto })
  apply(
    @Body(new ZodValidationPipe(CreateApplicationSchema))
    dto: CreateApplicationDto,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.service.apply(dto, user);
  }

  @Get()
  @ApiQuery({ type: ApplicationQuerySwaggerDto })
  getAll(
    @Query(new ZodValidationPipe(ApplicationQuerySchema))
    query: ApplicationQueryDto,
    @CurrentUser() user: JwtPayload,
  ) {
    return this.service.findAll(query, user);
  }
}