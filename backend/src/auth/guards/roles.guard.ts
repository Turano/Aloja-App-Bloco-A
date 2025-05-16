import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );
    if (!requiredRoles) {
      return true; // se a rota não tem roles definidas, libera geral
    }

    const request: Request & { user?: { role: string } } = context
      .switchToHttp()
      .getRequest();

    if (!request.user || !requiredRoles.includes(request.user.role)) {
      throw new ForbiddenException('Access denied: insufficient permissions');
    }
    return true;
  }
}
