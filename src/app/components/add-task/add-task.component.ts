import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';
//new comment
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task: Task = new Task();
  submitted = false;
  constructor(private taskService: TaskService) { }
  ngOnInit(): void {
  }
  saveTask(): void {
    this.taskService.create(this.task).then(() => {
      console.log('Created new task successfully!');
      this.submitted = true;
    });
  }
  newTask(): void {
    this.submitted = false;
    this.task = new Task();
  }
}
