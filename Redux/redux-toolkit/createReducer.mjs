// Babel과 함께 사용하지 않아서 import 관련 에러 발생 - React 프로젝트에서는 OK
/* The requested module '@reduxjs/toolkit' is a CommonJS module, which may not support all module.exports as named exports. */
import pkg from '@reduxjs/toolkit';
const { configureStore, createReducer } = pkg;

const initialNumbersState = [];

// const numberReducer = (state = initialNumbersState, action) => {
//     switch (action.type) {
//         case 'NUMBER-ADD':
//             const newNumbers = [...state.numbers, action.value];            
//             return { numbers: newNumbers }
//         default:
//             return state;
//     }
// }

const numberReducer = createReducer(initialNumbersState, builder => {
    builder.addCase('NUMBER-ADD', (state, action) => {
        state.push(action.value);
    })
});

const initialCharactersState = [];

// const characterReducer = (state = initialCharactersState, action) => {
//     switch (action.type) {
//         case 'CHARACTER-ADD':
//             const newCharacters = [...state.characters, action.value];            
//             return { characters: newCharacters }
//         default:
//             return state;
//     }
// }

const characterReducer = createReducer(initialCharactersState, builder => {
    builder.addCase('CHARACTER-ADD', (state, action) => {
        state.push(action.value);
    })
})

// 기존에는 React.combine 불필요 함수로 생성
const store = configureStore({
    reducer: {
        numbers: numberReducer,
        characters: characterReducer}
});

console.log('store.state 1:', store.getState());

store.dispatch({type: 'NUMBER-ADD', value: 1});

console.log('store.state 2:', store.getState());

store.dispatch({type: 'NUMBER-ADD', value: 2});

console.log('store.state 3:', store.getState());

store.dispatch({type: 'CHARACTER-ADD', value: 'a'});

console.log('store.state 2:', store.getState());

store.dispatch({type: 'CHARACTER-ADD', value: 'b'});

console.log('store.state 3:', store.getState());