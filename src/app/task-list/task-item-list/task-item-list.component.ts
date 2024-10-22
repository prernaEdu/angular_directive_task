import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-task-item-list',
  templateUrl: './task-item-list.component.html',
  styleUrl: './task-item-list.component.scss'
})
export class TaskItemListComponent {

  tasks = [
    { name: 'Finish Angular project', type: 'work', status: 'incomplete' },
    { name: 'Clean the house', type: 'home', status: 'incomplete' },
    { name: 'Go for a run', type: 'exercise', status: 'incomplete' },
    { name: 'Prepare dinner', type: 'home', status: 'complete' }
  ];

  @Output() taskCompleted = new EventEmitter<any>();

  completeTask(task: any) {
    task.status = 'complete';
    this.taskCompleted.emit(task);
  }

}
