import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, TasksService } from './tasks.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('/tasks')
export class TasksController {

    tasksService: TasksService;
    constructor(tasksService: TasksService){
        this.tasksService = tasksService;
    };

    @Get('/all')
    getAllTasks(@Query('limit') limit: number){

        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTasks(@Param('id') id: string){

        return this.tasksService.getTask(parseInt(id));
    }

    @Post('/create')
    createTask(@Body() body: CreateTaskDto){
        
        return this.tasksService.createTask(body);
    }

    @Put('/edit')
    editTask(@Body() task: UpdateTaskDto){

        return this.tasksService.updateTask(task);
    }

    @Patch('/editStatus')
    editTaskStatus(){

        return this.tasksService.updateStatusTask();
    }

    @Delete('/delete')
    deleteTask(){

        return this.tasksService.deleteTask();
    }
}