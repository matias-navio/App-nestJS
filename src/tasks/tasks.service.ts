import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface Task{
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

@Injectable()
export class TasksService {

    private tasks: Task[] = [];

    getAllTasks(): Task[]{

        return this.tasks;
    }

    getTask(id: number){

        const taskFound = this.tasks.find(task => task.id === id);

        if(!taskFound){
           return new NotFoundException('No se encontro la tarea con el id: ' + id);
        }

        return taskFound;
    }

    createTask(task: CreateTaskDto){

        this.tasks.push({
            ...task,
            id: this.tasks.length + 1,
            completed: false
        });

        return task; 
    }

    updateTask(task: UpdateTaskDto){

        console.log(task);
        return 'Actualizando tareas';
    }

    updateStatusTask(){

        return 'Actualizando estado de tareas';
    }

    deleteTask(){

        return 'Eliminando tareas';
    }
}
