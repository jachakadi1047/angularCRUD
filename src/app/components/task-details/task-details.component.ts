import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  @Input() task?: Task;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentTask: Task = {
    title: '',
    description: '',
    completed: false
  };
  message = '';
  constructor(private taskService: TaskService) { }
  ngOnInit(): void {
    this.message = '';
  }
  ngOnChanges(): void {
    this.message = '';
    this.currentTask = { ...this.task };
  }
  updateStatus(status: boolean): void {
    if (this.currentTask.id) {
      this.taskService.update(this.currentTask.id, { published: status })
      .then(() => {
        this.currentTask.completed = status;
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }
  updateTask(): void {
    const data = {
      title: this.currentTask.title,
      description: this.currentTask.description
    };
    if (this.currentTask.id) {
      this.taskService.update(this.currentTask.id, data)
        .then(() => this.message = 'The task was updated successfully!')
        .catch(err => console.log(err));
    }
  }
  deleteTask(): void {
    if (this.currentTask.id) {
      this.taskService.delete(this.currentTask.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The task was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }

}
