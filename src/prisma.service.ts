import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// esta la conexion que nos provee Prisma para poder interactuar con la base de datos
// es un servicio global porque lo podemos inyectar en cualquier modulo de la aplicacion
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}