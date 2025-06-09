import { TasksService } from './tasks.service';
import { Controller, Get } from '@nestjs/common';

@Controller({})
export class TasksController {

    tasksService: TasksService;
    constructor(tasksService: TasksService){
        this.tasksService = tasksService;
    };

    @Get('/tasks')
    getAllTasks(){

        return this.tasksService.getAllTasks();
    }
}