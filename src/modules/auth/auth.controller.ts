import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags, ApiBody } from "@nestjs/swagger";

import { AuthService } from "./auth.service";
import { RegisterSchema, RegisterDto } from "./dto/register.dto";
import { ZodValidationPipe } from "../../common/pipes/zod-validation.pipe";
import { LoginSchema } from "./schemas/login.schema";
import { LoginDto } from "./dto/login.dto";
import { Public } from "./decorators/public.decorator";

import { RegisterSwaggerDto } from "./swagger/register.swagger.dto";
import { LoginSwaggerDto } from "./swagger/login.swagger.dto";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(private service: AuthService) {}

  @Public()
  @Post("register")
  @ApiBody({ type: RegisterSwaggerDto })
  register(
    @Body(new ZodValidationPipe(RegisterSchema))
    dto: RegisterDto,
  ) {
    return this.service.register(dto);
  }

  @Public()
  @Post("login")
  @ApiBody({ type: LoginSwaggerDto })
  login(
    @Body(new ZodValidationPipe(LoginSchema))
    dto: LoginDto,
  ) {
    return this.service.login(dto);
  }
}