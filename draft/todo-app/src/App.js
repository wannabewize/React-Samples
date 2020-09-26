import React, {useState} from 'react';

function TodoList({todos}) {
    return (
        <ul>
        {todos.map( item => (
            <li key={item.id}>
                <input type="checkbox" checked={item.done}/> {item.text}
            </li>
        ))
        }
        </ul>
    )
}

function TodoHeader({todos}) {
    return (        
        <h3>Todo App ( {todos.filter( item => item.done ).length } / {todos.length})</h3>        
    )
}

function NewTodoForm({addTodo}) {
    let [todo, setTodo] = useState('');
    return (
        <div>
            <input value={todo} onChange={e => setTodo(e.target.value) }/>
            <button onClick={() => addTodo(todo)}>추가</button>
        </div>
    )
}

function App() {    
    let todos = [
        {id: 1, text: 'study react.js', done: false},
        {id: 2, text: 'study ReactNative', done: false},
        {id: 3, text: 'study node.js', done: true}
    ]

    function addTodo(todo) {
        todos.push({id: 0, text: todo, done: false})
        console.log('addTodo wors :', addTodo);
    }

    return (
        <div>
            <TodoHeader todos={todos} />
            <TodoList todos={todos} />
            <NewTodoForm addTodo={addTodo}/>
        </div>
    );
}

export default App;
