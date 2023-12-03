import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
const routes: Routes = [
  { path: '', redirectTo: 'Tasks', pathMatch: 'full' },
  { path: 'Tasks', component: TaskListComponent },
  { path: 'Add', component: AddTaskComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
