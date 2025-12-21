import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "../decorators/roles.decorator";
import { UserRole } from "@prisma/client";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(ctx: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
      ROLES_KEY,
      [ctx.getHandler(), ctx.getClass()],
    );

    if (!requiredRoles) return true;

    const { user } = ctx.switchToHttp().getRequest();

    if (!user) {
      throw new ForbiddenException("Usuário não autenticado.");
    }

    if (!requiredRoles.includes(user.role)) {
      throw new ForbiddenException("Você não tem permissão para acessar este recurso.");
    }

    return true;
  }
}
