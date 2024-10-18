import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componemnts/header/header.component';
import { ButtonComponent } from './componemnts/button/button.component';
import { TasksComponent } from './componemnts/tasks/tasks.component';
import { TaskItemComponent } from './componemnts/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from './componemnts/add-task/add-task.component';
import { AboutComponent } from './componemnts/about/about.component';
import { FooterComponent } from './componemnts/footer/footer.component';
import { NavbarComponent } from './componemnts/navbar/navbar.component';

const appRoutes: Routes = [
  {path: '', component: TasksComponent},
  { path: 'about', component: AboutComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
