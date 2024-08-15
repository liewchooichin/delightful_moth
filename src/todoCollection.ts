import { TodoItem } from "./todoItem.js";

/**
 * Type of ItemCounts.
 * @member total: total number of items.
 * @member incompleted: total number of incompleted items.
 */
type ItemCounts = {
    total: number,
    incomplete: number
}


/**
 * A collection of TodoItem.
 */
export class TodoCollection {
    private taskId: number = 1;
    private itemMap = new Map<number, TodoItem>();
    /**
     * Constructor of TodoCollection.
     * @param userName Username of the person.
     * @param todoItems Tasks to be added to the to do list.
     */
    constructor(public userName: string, todoItems: TodoItem[] = []) {
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }

    /**
     * Add item to to do list.
     * @param task Task to add to the to do list.
     * @returns id of the task.
     */
    addTodo(task: string): number {
        while (this.getTodoById(this.taskId)) {
            this.taskId++;
        }
        this.itemMap.set(this.taskId, new TodoItem(this.taskId, task));
        return this.taskId;
    }
    /**
     * Get a to do item by Id.
     * @param id Id of the task.
     * @returns To do item if it exists, else undefined.
     */
    getTodoById(id: number) : TodoItem | undefined {
        let result = this.itemMap.get(id);
        if (result instanceof TodoItem) 
            return result;
        else
            return undefined;
    }
    /**
     * Get completed or not yet completed items.
     * @param includeComplete whether to include completed or not yet
     * completed items.
     * @returns list of to do items.
     */
    getTodoItems(includeComplete: boolean): TodoItem[] {
        return [...this.itemMap.values()]
            // only return completed or not completed items
            .filter(item => item.complete===includeComplete);
            // return all items
            //.filter(item => includeComplete || !item.complete);
    }
    /**
     * Mark a task as completed or not.
     * @param id Id of the to do item.
     * @param complete true if task is completed, else false.
     */
    markComplete(id: number, complete: boolean) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }
    /**
     * Remove completed tasks.
     */
    removeCompleted() {
        this.itemMap.forEach(item => {
            if (item.complete) {
                this.itemMap.delete(item.id);
            }
        })
    }
    /**
     * Total number of items.
     * @returns total number of items and also total number
     * of incompleted items.
     * 
     */
    getItemCounts(): ItemCounts {
        return {
            total: this.itemMap.size,
            incomplete: this.getTodoItems(false).length
        };
        }
}