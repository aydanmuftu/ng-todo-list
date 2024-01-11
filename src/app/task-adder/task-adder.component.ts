import { TaskService } from './../task.service';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
/**
 * Task adder component.
 *
 * @export
 * @class TaskAdderComponent
 * @typedef {TaskAdderComponent}
 */
@Component({
  selector: 'app-task-adder',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-adder.component.html',
  styleUrl: './task-adder.component.css'
})
export class TaskAdderComponent {
  /**
   * Value of label for the task to add.
   *
   * @protected
   * @type {*}
   */
  protected value: any = "";
  /**
   * Creates an instance of TaskAdderComponent.
   *
   * @constructor
   * @param {TaskService} taskService
   */
  constructor(protected taskService: TaskService) {}
}
