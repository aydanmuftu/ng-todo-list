import { Injectable, WritableSignal, computed, signal } from '@angular/core';
import { Signal } from '@angular/core';
/**
 * Service for task management.
 *
 * @export
 * @class TaskService
 * @typedef {TaskService}
 */
@Injectable({ providedIn: 'root' })
export class TaskService {
    /**
     * Tasks list.
     *
     * @type {WritableSignal<Task[]>}
     */
    #tasks: WritableSignal<Task[]> = signal<Task[]>([]);
    /**
     * Tasks list value accessor.
     *
     * @type {Signal<Task[]>}
     */
    tasks: Signal<Task[]> = computed(this.#tasks);
    /**
     * Add a task by label.
     *
     * @public
     * @param {string} _label
     */
    public add(_label: string): void {
        this.#tasks.update((_list: Task[]) => [..._list, new Task(_label)]);
    }
    /**
     * Remove a task by label.
     *
     * @public
     * @param {string} _label
     */
    public remove(_label: string): void {
        this.#tasks.update((_list: Task[]) =>
            _list.filter((_task: Task) => _task.label !== _label)
        );
    }
    /**
     * Check a task by label.
     *
     * @public
     * @param {string} _label
     */
    public check(_label: string): void {
        this.#tasks.update((_list: Task[]) =>
            _list.map((_task: Task) => {
                if (_task.label === _label) _task.check();
                return _task;
            })
        );
    }
}
/**
 * Task class.
 *
 * @export
 * @class Task
 * @typedef {Task}
 */
export class Task {
    /**
     * State: checked or unchecked.
     *
     * @private
     * @type {boolean}
     */
    private checked: boolean = false;
    /**
     * Creates an instance of Task.
     *
     * @constructor
     * @param {string} label
     */
    constructor(public label: string) {}
    /**
     * Get the state.
     *
     * @public
     * @readonly
     * @type {boolean}
     */
    public get isChecked(): boolean {
        return this.checked;
    }
    /**
     * Change the state.
     *
     * @public
     */
    public check(): void {
        this.checked = !this.checked;
    }
}
