export function reducer(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            const newTodo = {id: action.id, content: action.content, done: false }
            return [...state, newTodo];
        case 'TOGGLE_TODO':
            // state 복제
            const newTodos = [...state];
            // id에 해당하는 todo 찾아서 done 변경
            for(let item of newTodos) {
                if ( item.id == action.id ) {
                    item.done = !item.done;
                    break;
                }
            }
            // 새로운 todo 반환

            return newTodos;
        default:
            return state
    }
}