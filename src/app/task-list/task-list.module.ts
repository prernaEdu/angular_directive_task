import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemListComponent } from './task-item-list/task-item-list.component';
import { ParentListComponent } from './parent-list/parent-list.component';



@NgModule({
  declarations: [
    TaskItemListComponent,
    ParentListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TaskItemListComponent, ParentListComponent] 
})
export class TaskListModule { }
