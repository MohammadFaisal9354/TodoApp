// src/todo/todo.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'database/entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async create(todo: Todo): Promise<Todo> {
    return await this.todoRepository.save(todo);
  }

  async update(id: number, todo: Todo): Promise<Todo | null> {
    const existingTodo = await this.todoRepository.findOne({
      where: { id },
    });
    if (!existingTodo) {
      return null;
    }
    await this.todoRepository.update(id, todo);
    return await this.todoRepository.findOne({
      where: { id },
    });
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.todoRepository.delete(id);
    return result.affected > 0;
  }
}
