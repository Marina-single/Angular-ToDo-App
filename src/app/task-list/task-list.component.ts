import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
tasks = [
   { name: 'Shopping', done: false },
   { name: 'Training', done: false },
   { name: 'Codding', done: false }
  ];
 toggleTaskStatus(index: number): void {
    this.tasks[index].done = !this.tasks[index].done;
  }
}
