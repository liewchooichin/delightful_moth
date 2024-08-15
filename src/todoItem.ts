/**
 * Invidividual TodoItem.
 */
export class TodoItem {
    public id: number;
    public task: string;
    public complete: boolean = false;
    /**
     * Constructor of TodoItem.
     * @param id Id of task.
     * @param task Description of task.
     * @param complete Whether completed or not.
     */
    public constructor(
        id: number, 
        task: string,
        complete: boolean = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    /**
     * Print details of a to do item.
     */
    public printDetails() : void {
        console.log(`${this.id}\t${this.task} ${this.complete}
            ${this.complete ? "\t(complete)": "\t(not yet)"}`);
    }
}