import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

tasks = [
   { name: 'Shopping', description:'buy something', done: false },
   { name: 'Training', description:'', done: false },
   { name: 'Codding', description:'', done: false }
  ];
 toggleTaskStatus(index: number): void {
    this.tasks[index].done = !this.tasks[index].done;
  }
}
