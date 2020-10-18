import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {toggleTodo} from "./Actions";

export const TodoList = () => {
    // state는 todo의 배열 자체이므로, state 전체를 사용
    const todos = useSelector( (state) => { return state } );
    const dispatch = useDispatch();

    function handleToggleTodo(todoId) {
        console.log('toggle todo :', todoId);
        dispatch(toggleTodo(todoId));
    }

    return (
        <div>
            <h3>Todo List</h3>
            <ul>
                {todos.map( item => (
                    <li><input type="checkbox"
                        checked={item.done}
                        onChange={ () => handleToggleTodo(item.id)} />{item.content}</li>
                ))}
            </ul>
        </div>
    )
}