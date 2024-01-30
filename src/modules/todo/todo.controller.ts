// src/todo/todo.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.sevice';
import { Todo } from 'database/entities/todo.entity';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Post()
  async create(@Body() todo: Todo): Promise<Todo> {
    return this.todoService.create(todo);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() todo: Todo,
  ): Promise<Todo | null> {
    return this.todoService.update(id, todo);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<boolean> {
    return this.todoService.delete(id);
  }
}
