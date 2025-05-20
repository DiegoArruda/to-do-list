import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task!: { texto: string; concluida: boolean };
  @Input() index!: number;

  @Output() complete = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

  onComplete() {
    this.complete.emit(this.index);
  }

  onRemove() {
    this.remove.emit(this.index);
  }
}
