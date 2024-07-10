import { Component, EventEmitter, Output, signal, inject, Input } from '@angular/core';
//Collection of directives to work with forms
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  //standalone: true,
  standalone: false,
  //imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId ! :  string
  @Output() close = new EventEmitter<void>();
  //@Output() add = new EventEmitter<NewTaskData>();

  // enteredTitle = '';
  // enteredSummary='';
  // enteredDueDate = '';

  enteredTitle = '';
  enteredSummary='';
  enteredDueDate = '';

// Dependency inject
private tasksService = inject(TasksService)

 // method called when cancel button and backdrop is clicked in the template of this component 
 onCancel(){
    this.close.emit();
  }

    onSubmit(){

      this.tasksService.addTask({
        title : this.enteredTitle,
        summary : this.enteredSummary,
        date : this.enteredDueDate


      }, this.userId)
      this.close.emit();
    }

}
