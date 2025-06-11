import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [TasksModule, ProjectsModule, AuthModule, UsersModule, PaymentModule],
  controllers: [HelloController]
})
export class AppModule {}
