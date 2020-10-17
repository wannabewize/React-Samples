import {ADD_TODO, TOGGLE_TODO} from "./actionType";

let todoId = 0;

export const addTodo = (content) => {
    return {
        type: ADD_TODO,
        id: todoId++,
        content,
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    }
}