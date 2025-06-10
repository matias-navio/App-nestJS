import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

// define la estructura de una tarea
export interface Task{
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

@Injectable()
export class TasksService {

    // lista de tareas donde se van a ir almacenando
    private tasks: Task[] = [];

    // metodo para devolver todas las tareas
    getAllTasks(): Task[]{

        return this.tasks;
    }

    // metodo para devolver una tarea por su id
    // si no se encuentra, lanza una excepcion NotFoundException
    getTask(id: number){

        const taskFound = this.tasks.find(task => task.id === id);

        if(!taskFound){
           return new NotFoundException('No se encontro la tarea con el id: ' + id);
        }

        return taskFound;
    }

    // metodo para crear una tarea y agregarla a la lista, recibiendo un DTO
    createTask(task: CreateTaskDto){

        // usa los datos conocidos y agrega un id y completed
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
