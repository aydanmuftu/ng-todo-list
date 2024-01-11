import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TaskAdderComponent } from './task-adder/task-adder.component';
import { TaskListComponent } from './task-list/task-list.component';
/**
 * App component.
 *
 * @export
 * @class AppComponent
 * @typedef {AppComponent}
 */
@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        RouterOutlet,
        TaskListComponent,
        TaskAdderComponent,
    ],
})
export class AppComponent {
    /**
     * Title.
     *
     * @type {string}
     */
    title = 'Angular todo list';
}
