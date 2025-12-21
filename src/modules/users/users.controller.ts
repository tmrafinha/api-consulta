import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';

import { UsersService } from './users.service';
import { User, UserRole } from '@prisma/client';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';

import { CreateUserDto, CreateUserSchema } from './schemas/create-user.schema';
import { UpdateUserDto, UpdateUserSchema } from './schemas/update-user.schema';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';

import { CreateUserSwaggerDto } from './swagger/create-user.swagger.dto';
import { UpdateUserSwaggerDto } from './swagger/update-user.swagger.dto';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { JwtPayload } from '../auth/strategies/jwt.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Post()
  @ApiBody({ type: CreateUserSwaggerDto })
  create(
    @Body(new ZodValidationPipe(CreateUserSchema))
    dto: CreateUserDto,
  ): Promise<User> {
    return this.service.create(dto, dto.email);
  }

  // 👇 PRIMEIRO a rota fixa /me
  @Put('me')
  @ApiBody({ type: UpdateUserSwaggerDto })
  updateMe(
    @CurrentUser() user: JwtPayload,
    @Body(new ZodValidationPipe(UpdateUserSchema))
    dto: UpdateUserDto,
  ): Promise<User> {
    return this.service.update(user.sub, dto, user.email);
  }

  // 👇 DEPOIS a rota dinâmica /:id
  @Put(':id')
  @ApiBody({ type: UpdateUserSwaggerDto })
  update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(UpdateUserSchema))
    dto: UpdateUserDto,
  ): Promise<User> {
    return this.service.update(id, dto, 'system');
  }

  @Get(':id')
  @Roles(UserRole.ADMIN)
  get(@Param('id') id: string): Promise<User | null> {
    return this.service.findById(id);
  }
}