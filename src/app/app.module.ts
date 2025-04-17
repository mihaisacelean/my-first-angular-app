import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {TaskComponent} from './tasks/task/task.component';
import {TasksComponent} from './tasks/tasks.component';
import {CardComponent} from './shared/card/card.component';
import {DatePipe} from '@angular/common';
import {NewTaskComponent} from './tasks/new-task/new-task.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    TaskComponent,
    CardComponent,
    NewTaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DatePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
