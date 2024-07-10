import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
// import browser module that provides collection of things to run an angular module based app successfully
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './shared/card/card.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { SharedModule } from './shared/card/shared.module';
import { TasksModule } from './tasks/tasks.module';

// a module is a class that is exported

@NgModule({
  // declare and register all the componenets that want to work togther
  // we have to add all the compoenents that are used in the app components template
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    // Shared Module for Card Component
    //!CardComponent,
    // we can put Task Components into a seprate shared module
    // TasksComponent,
    // TaskComponent,
    // NewTaskComponent,
  ],
  // We have to specify the root component of this module so, we add boostrap config array
  bootstrap: [AppComponent],
  // for standalone components
  // converting all the other components to standalone component
  // Pipes are automatically added by the browser module
  imports: [BrowserModule, SharedModule, TasksModule],
})
export class AppModule {}
