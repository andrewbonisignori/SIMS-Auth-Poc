import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from './controllers/students/students.module';
import { NotificationsModule } from './controllers/notifications/notifications.module';
import { Student } from './database/students.entity'
import { Notification } from './database/notifications.entity'

@Module({
  imports: [
    StudentsModule,
    NotificationsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5430,
      username: 'postgres',
      password: '123456',
      database: 'SIMSDB',
      entities: [Student, Notification],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
