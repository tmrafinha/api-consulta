import { AuthRepository } from "./auth.repository";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";
import { JwtService } from "@nestjs/jwt";
import { User } from "@prisma/client";
export declare class AuthService {
    private repo;
    private jwt;
    constructor(repo: AuthRepository, jwt: JwtService);
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
