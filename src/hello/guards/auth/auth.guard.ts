import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest() as Request;

    // si el header authorization de la request es distinto de 'token-123' no permite el acceso
    if(request.headers['authorization'] !== 'token-123') return false;

    return true;
  }
}
