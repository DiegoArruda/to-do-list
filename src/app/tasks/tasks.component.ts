// tasks.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskItemComponent } from './task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  newTask = '';
  tasks: { texto: string; concluida: boolean }[] = [];

  addTask() {
    const texto = this.newTask.trim();
    if (texto) {
      this.tasks.push({ texto, concluida: false });
      this.newTask = '';
    }
  }

  toggleComplete(index: number) {
    this.tasks[index].concluida = !this.tasks[index].concluida;
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
