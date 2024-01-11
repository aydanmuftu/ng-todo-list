import { Task, TaskService } from '../../task.service';
import { Component, Input } from '@angular/core';
/**
 * Task item.
 *
 * @export
 * @class TaskItemComponent
 * @typedef {TaskItemComponent}
 */
@Component({
    imports: [],
    standalone: true,
    selector: 'app-task-item',
    templateUrl: './task-item.component.html',
    styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
    /**
     * Task to display.
     *
     * @type {!Task}
     */
    @Input() task!: Task;
    /**
     * Creates an instance of TaskItemComponent.
     *
     * @constructor
     * @param {TaskService} taskService
     */
    constructor(protected taskService: TaskService) {}
}
