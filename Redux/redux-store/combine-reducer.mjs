// 데이터를 numbers, characters로 분리, reducer도 분리하기
import Redux from 'redux';
import { combineReducers } from "redux";

const initialNumbersState = {
    numbers: []
}

const numberReducer = (state = initialNumbersState, action) => {
    switch (action.type) {
        case 'NUMBER-ADD':
            const newNumbers = [...state.numbers, action.value];            
            return { numbers: newNumbers }
        default:
            return state;
    }
}

const initialCharactersState = {
    characters: []
}

const characterReducer = (state = initialCharactersState, action) => {
    switch (action.type) {
        case 'CHARACTER-ADD':
            const newCharacters = [...state.characters, action.value];            
            return { characters: newCharacters }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    numbers: numberReducer,
    characters: characterReducer
});

const store = Redux.createStore(rootReducer);

console.log('store.state 1:', store.getState());

store.dispatch({type: 'NUMBER-ADD', value: 1});

console.log('store.state 2:', store.getState());

store.dispatch({type: 'NUMBER-ADD', value: 2});

console.log('store.state 3:', store.getState());

store.dispatch({type: 'CHARACTER-ADD', value: 'a'});

console.log('store.state 2:', store.getState());

store.dispatch({type: 'CHARACTER-ADD', value: 'b'});

console.log('store.state 3:', store.getState());