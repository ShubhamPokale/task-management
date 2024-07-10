// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// import { HeaderComponent } from './app/header/header.component';


//! works only if AppcComponent is a standalone component
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


  // bootstrapApplication(HeaderComponent);  

  // Code for Module 
  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
  import { AppModule } from './app/app.module';

  platformBrowserDynamic().bootstrapModule(AppModule)