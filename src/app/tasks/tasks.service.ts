import { Injectable } from '@angular/core';
import { NewTaskData } from './task/task.model';
@Injectable({providedIn : 'root'})

// Its a good practice to keep your components as lean as possible. So we use service
export class TasksService {
  private dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];


  constructor(){

    const tasks = localStorage.getItem('tasks');

    if(tasks){
      this.dummyTasks = JSON.parse(tasks);
    }

  }

  getUserTask(userId: string) {
    return this.dummyTasks.filter((task) => task.userId === userId);
  }

  addTask(taskdata: NewTaskData, userId: string) {
    this.dummyTasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskdata.title,
      summary: taskdata.summary,
      dueDate: taskdata.date,
    });
    this.saveTasks();
  }
    
    
    removeTask(id:string){
        // the filer method creates a new array filled with elements that dont match with the id of the completed task
         this.dummyTasks = this.dummyTasks.filter((task)=> task.id !== id);
        this.saveTasks();
      }

      //helper method
      private saveTasks(){

        localStorage.setItem('tasks', JSON.stringify(this.dummyTasks))

      }
}
