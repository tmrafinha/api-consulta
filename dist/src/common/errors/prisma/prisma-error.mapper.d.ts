import { Prisma } from "@prisma/client";
import { BadRequestException, ConflictException, ForbiddenException, InternalServerErrorException, NotFoundException } from "@nestjs/common";
export declare function mapPrismaError(e: Prisma.PrismaClientKnownRequestError): ConflictException | BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException;
