import { AuthService } from "./auth.service";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";
export declare class AuthController {
    private service;
    constructor(service: AuthService);
    register(dto: RegisterDto): Promise<{
        user: import(".prisma/client").User;
        token: string;
    }>;
    login(dto: LoginDto): Promise<{
        user: import(".prisma/client").User;
        token: string;
    }>;
}
