"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.clear();
console.log("Squirrel's Todo List");
const todoItem_js_1 = require("./todoItem.js");
const todoCollection_js_1 = require("./todoCollection.js");
let todos = [
    new todoItem_js_1.TodoItem(1, "Buy Flowers"),
    new todoItem_js_1.TodoItem(2, "Get Shoes"),
    new todoItem_js_1.TodoItem(3, "Collect Tickets"),
    new todoItem_js_1.TodoItem(4, "Call Joe", true)
];
let collection = new todoCollection_js_1.TodoCollection("Squirrel's", todos);
console.clear();
console.log(`${collection.userName}'s Todo List`);
let newId = collection.addTodo("Go for run");
let todoItem = collection.getTodoById(newId);
// Get one to do item
/*
if(todoItem)
    todoItem.printDetails();
else
    console.log(`No detail for item `)
*/
// Print all to do item
/*
for(const item of collection.getTodoItems(true)) {
    console.log(item.printDetails());
}
*/
// Mark task 2 as completed.
collection.markComplete(2, true);
// print new task lists.
// not yet completed
console.log("---Not yet completed itmes---");
collection.getTodoItems(false).forEach(item => item.printDetails());
// completed
console.log("---Completed items---");
collection.getTodoItems(true).forEach(item => item.printDetails());
// display total number of items and incompleted ones.
console.log(`---${collection.userName}'s Todo List--- \n \
    \t${collection.getItemCounts().total} total items \n \
    \t${collection.getItemCounts().incomplete} not yet completed)`);
// remove completed items.
collection.removeCompleted();
// check if items have been successfully removed.
console.log("---Completed items has been removed---");
// no result which is correct because completed items have been removed.
collection.getTodoItems(true).forEach(item => item.printDetails());
