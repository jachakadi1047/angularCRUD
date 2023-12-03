import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks?: Task[];
  currentTask?: Task;
  currentIndex = -1;
  title = '';
  constructor(private taskService: TaskService) { }
  ngOnInit(): void {
    this.retreiveTasks();
  }
  refreshList(): void {
    this.currentTask = undefined;
    this.currentIndex = -1;
    this.retreiveTasks();
  }
  retreiveTasks(): void {
    this.taskService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.tasks = data;
    });
  }
  setActiveTask(task: Task, index: number): void {
    this.currentTask = task;
    this.currentIndex = index;
  }
}
