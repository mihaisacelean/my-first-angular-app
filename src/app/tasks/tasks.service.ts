import {Injectable} from '@angular/core';
import {NewTaskData} from './task/task.model';

@Injectable({
    providedIn: 'root'
  })
export class TasksService {
  private tasks = [
    {id:'t1', userId: 'u3', title: 'Master Angular', summary:'Master Angular and all that stuf blaablblabala', dueDate: '2025-12-31'},
    {id:'t2', userId: 'u2', title: 'Master React', summary:'Master React and all that stuf blaablblabala', dueDate: '2025-05-12'},
    {id:'t3', userId: 'u1', title: 'Master Vue', summary:'Master Vue and all that stuf blaablblabala', dueDate: '2025-04-23'},
  ]

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId:string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
      userId: userId
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
