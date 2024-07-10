import { Component, Input, input, output, computed, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';
//import { CardComponent } from '../shared/card/card.component';

// type alias
// type User =  {
//   id:string;
//   avatar: string;
//   name : string

// }
// type or interface, both are valid, angular genrally uses interface

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  // standalone: true,
  standalone: false,
  //imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  //getter
  // get imagePath() {
  //   return '../../assets/users/' + this.selectedUser.avatar;
  // }
  // computed function works along with Signals
  //imagePath = computed(()=> '../../assets/users/' + this.selectedUser().avatar)

  // event listener function
  //onSelectUser() {
  // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

  //console.log("Clicked !");
  // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // this.selectedUser = DUMMY_USERS[randomIndex];
  // }

  //!input decorator

  // The exclamation mark tells typescript that the value will be initialized from outside.
  // @Input({required : true}) id!:string;
  // @Input({required : true}) avatar! : string;
  // @Input({required : true}) name !: string;

    // instead of taking individual inputs, we input the entire object
  @Input ({required : true}) user! : User;
  @Input ({required : true}) selected! : boolean; 

  // Output decorator
  @Output() select = new EventEmitter<string>();

// output function -- modern way
// select = output<string>();

  // Input using signal input
  // input is a special fucntion by signal input
  // ReadOnly signals - cannot change the value from inside the component i.e set method cannot be called on signal inputs
  // avatar = input.required<string>();
  // name = input.required<string>();

//  getter
  get imagePath() {
    return '../../assets/users/' + this.user.avatar;
  }

  // imagePath = computed(() => {
  //   return '../../assets/users/' + this.avatar();
  // });

  onSelectUser() {

    this.select.emit(this.user.id);

  }
}
