import { Component , Input} from '@angular/core';
import { TaskComponent } from "./task/task.component";
import {  NewTaskComponent } from "./new-task/new-task.component";
import {type NewTaskData} from "./task/task.model";
import { TasksService } from './tasks.service';
@Component({
    selector: 'app-tasks',
    // standalone: true,
    standalone : false,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    //imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  // getting this input from app.component.ts and using it in app.component.html template
  @Input( {required:true}  ) name !: string;
  @Input({required:true}) userId !: string;
  isAddingTask = false;

// service 
// private taskservice = new TasksService();

// Dependency Injection 
//private tasksService : TasksService;

constructor(private tasksService : TasksService){

   // this.tasksService = taskService

}

  // fetching user specific tasks

  get selectedUserTask (){

    return this.tasksService.getUserTask(this.userId);

  }

  onCompleteTask(id:string){
    // the filer method creates a new array filled with elements that dont match with the id of the completed task
  }


  onStartAddTask(){
    this.isAddingTask = true;
    console.log("Task added successfully");
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }


  // onAddTask(taskdata : NewTaskData){


  //   this.isAddingTask = false;

  // }

}
