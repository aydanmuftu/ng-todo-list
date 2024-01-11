import { TaskItemComponent } from './task-item/task-item.component';
import { CommonModule } from '@angular/common';
import { TaskService } from '../task.service';
import { Component } from '@angular/core';
/**
 * Task list component.
 *
 * @export
 * @class TaskListComponent
 * @typedef {TaskListComponent}
 */
@Component({
    standalone: true,
    selector: 'app-task-list',
    styleUrl: './task-list.component.css',
    templateUrl: './task-list.component.html',
    imports: [CommonModule, TaskItemComponent],
})
export class TaskListComponent {
    /**
     * Creates an instance of TaskListComponent.
     *
     * @constructor
     * @param {TaskService} taskService
     */
    constructor(protected taskService: TaskService) {}
}
