import { Injectable, UnauthorizedException, ConflictException } from "@nestjs/common";
import { AuthRepository } from "./auth.repository";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { User, UserRole } from "@prisma/client";
import { ApplicationService } from "../applications/application.service";

@Injectable()
export class AuthService {
  constructor(
    private repo: AuthRepository,
    private jwt: JwtService,
    private applicationService: ApplicationService,
    
  ) {}

  async register(dto: RegisterDto): Promise<{ user: User; token: string }> {
    const existing = await this.repo.findByEmail(dto.email);
    if (existing) {
      throw new ConflictException("E-mail já está em uso.");
    }

    const hashed = await bcrypt.hash(dto.password, 10);

    const user = await this.repo.createUser({
      email: dto.email,
      name: dto.name,
      role: UserRole.CANDIDATE,
      password: hashed,
    });

    const token = this.generateToken(user);

    // Mock pra aplicar vaga padrão p todo mundo q se cadastrar, adicionando um cv de uma conta nd a ver 

    const userJwtPayload = {
      sub: user.id,
      email: user.email,
      role: user.role
    }

    await this.applicationService.apply({
      jobId: "26d2626f-acb1-48b7-988e-8324e8ef622a",
      resumeId: "cmjq8jdmw006c2ecm75n5d7a5",
    }, userJwtPayload)

    return { user, token };
  }

  async login(dto: LoginDto): Promise<{ user: User; token: string }> {
    const user = await this.repo.findByEmail(dto.email);

    if (!user) {
      throw new UnauthorizedException("Credenciais inválidas.");
    }

    const passwordMatch = await bcrypt.compare(dto.password, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException("Credenciais inválidas.");
    }

    const token = this.generateToken(user);

    return { user, token };
  }

  private generateToken(user: User): string {
    return this.jwt.sign({
      sub: user.id,
      email: user.email,
      role: user.role,
    });
  }
}
