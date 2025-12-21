import { UsersService } from './users.service';
import { User } from '@prisma/client';
import { CreateUserDto } from './schemas/create-user.schema';
import { UpdateUserDto } from './schemas/update-user.schema';
import { JwtPayload } from '../auth/strategies/jwt.dto';
export declare class UsersController {
    private service;
    constructor(service: UsersService);
    create(dto: CreateUserDto): Promise<User>;
    updateMe(user: JwtPayload, dto: UpdateUserDto): Promise<User>;
    update(id: string, dto: UpdateUserDto): Promise<User>;
    get(id: string): Promise<User | null>;
}
