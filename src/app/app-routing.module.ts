import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListModule } from './task-list/task-list.module';
import { TaskItemListComponent } from './task-list/task-item-list/task-item-list.component';

const routes: Routes = [
  {path:'', component: TaskItemListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),TaskListModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
