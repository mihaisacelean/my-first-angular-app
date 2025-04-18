import {NgModule} from "@angular/core";
import {TasksComponent} from "./tasks.component";
import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TasksComponent
  ]
})
export class TaskModule {

}
