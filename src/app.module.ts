import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './modules/todo/todo.module';
import { Todo } from 'database/entities/todo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password123A$',
      database: 'todo_db',
      entities: [Todo],
      synchronize: true,
      logging: true,
    }),

    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
