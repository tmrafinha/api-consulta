import { AuthRepository } from "./auth.repository";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";
import { JwtService } from "@nestjs/jwt";
import { User } from "@prisma/client";
import { ApplicationService } from "../applications/application.service";
export declare class AuthService {
    private repo;
    private jwt;
    private applicationService;
    constructor(repo: AuthRepository, jwt: JwtService, applicationService: ApplicationService);
    register(dto: RegisterDto): Promise<{
        user: User;
        token: string;
    }>;
    login(dto: LoginDto): Promise<{
        user: User;
        token: string;
    }>;
    private generateToken;
}
