import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SharedModule} from "./shared/shared.module";
import {TaskModule} from "./tasks/task.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    DatePipe,
    TaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
