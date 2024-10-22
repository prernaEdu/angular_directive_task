import { Component } from '@angular/core';
import { TaskItemListComponent } from '../task-item-list/task-item-list.component'

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrl: './parent-list.component.scss',
})
export class ParentListComponent {
  onTaskCompleted(task: any) {
    console.log('Task completed:', task);
  }
}
