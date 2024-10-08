"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_js_1 = require("./todoItem.js");
const todoCollection_js_1 = require("./todoCollection.js");
const inquirer_1 = __importDefault(require("inquirer"));
let todos = [
    new todoItem_js_1.TodoItem(1, "Buy Flowers"), new todoItem_js_1.TodoItem(2, "Get Shoes"),
    new todoItem_js_1.TodoItem(3, "Collect Tickets"), new todoItem_js_1.TodoItem(4, "Call Joe", true)
];
let collection = new todoCollection_js_1.TodoCollection("Adam", todos);
function displayTodoList() {
    console.log(`${collection.userName}'s Todo List `
        + `(${collection.getItemCounts().incomplete} items to do)`);
    collection.getTodoItems(true).forEach(item => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptUser() {
    console.clear();
    displayTodoList();
    inquirer_1.default.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands)
    }).then(answers => {
        if (answers["command"] !== Commands.Quit) {
            promptUser();
        }
    });
}
promptUser();
