import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from './task.model';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({required: true}) task: Task = {} as Task;
  @Output() complete = new EventEmitter<string>();

  constructor(
    private tasksService: TasksService
  ) {
  }

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
