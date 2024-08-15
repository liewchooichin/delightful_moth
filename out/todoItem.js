"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
/**
 * Invidividual TodoItem.
 */
class TodoItem {
    id;
    task;
    complete = false;
    /**
     * Constructor of TodoItem.
     * @param id Id of task.
     * @param task Description of task.
     * @param complete Whether completed or not.
     */
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    /**
     * Print details of a to do item.
     */
    printDetails() {
        console.log(`${this.id}\t${this.task} ${this.complete}
            ${this.complete ? "\t(complete)" : "\t(not yet)"}`);
    }
}
exports.TodoItem = TodoItem;
