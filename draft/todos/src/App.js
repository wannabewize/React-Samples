import React, {useState} from 'react';

const TodoList = ({todos}) => {
    return (
        <ul>
        {todos.map( item => (
            <li key={item.id}>{item.text}</li>
        ))}
        </ul>
    )
}

const AddTodo = ({addTodo}) => {
    let [todo, setTodo] = useState(null);
    function handleAddTodo(e) {
        addTodo(todo);
    }
    return (
        <form onSubmit={handleAddTodo}>
            <input onChange={e => {setTodo(e.target.value)}} placeholder="할일을 입력하세요"/>
            <input type="submit" />
        </form>
    )
}

class Todo {
    static globalId = 0;
    constructor(text) {
        this.id = Todo.globalId++;
        this.text = text;
        this.done = false;
    }
}

function App() {
    let [todos, setTodos] = useState([
        new Todo('Node.js'),
        new Todo('React.js'),
        new Todo('ReactNative'),
    ])

    function addTodo(todo) {
        console.log('add todo works:', todo);
        let newTodo = todos;        
        newTodo.push( new Todo(todo) );
        console.log('new todos :', newTodo);
        setTodos(newTodo);
    }

    return (
        <div>
            <h1>Todos</h1>
            <TodoList todos={todos} />
            <AddTodo addTodo={addTodo}/>
        </div>
    );
}

export default App;
