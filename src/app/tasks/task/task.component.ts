import { Component , inject, Input} from '@angular/core';
import { Task } from './task.model';
import { DatePipe } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';
import { TasksService } from '../tasks.service';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-task',
  // standalone: true,
  standalone: false,
  //imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required: true}) task! : Task ;
    // for task complete button fucntionality
  private tasksService = inject(TasksService);

  // method
  onCompleteTask(){
    this.tasksService.removeTask(this.task.id);
  }
  
 

}
