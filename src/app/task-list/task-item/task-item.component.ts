import { CommonModule } from '@angular/common';
import { Task, TaskService } from '../../task.service';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
/**
 * Task item.
 *
 * @export
 * @class TaskItemComponent
 * @typedef {TaskItemComponent}
 */
@Component({
    standalone: true,
    selector: 'app-task-item',
    imports: [CommonModule, FormsModule],
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
     * State of edition.
     *
     * @protected
     * @type {boolean}
     */
    protected isInEditMod: boolean = false;
    /**
     * Creates an instance of TaskItemComponent.
     *
     * @constructor
     * @param {TaskService} taskService
     */
    constructor(protected taskService: TaskService) {}
}
