import Redux from 'redux';

const initialState = {
    title: 'Redux - Store',
    value: 0
};

function counter(state = initialState, action) {
    switch (action.type) {
        case 'INCREASE':
            return {...state, value: state.value + action.amount};
        case 'DECREASE':
            return {...state, value: state.value - action.amount};
        default:
            return state
    }
}

const store = Redux.createStore(counter);

// 초기값
const state = store.getState();
console.log('initial state:', state);

// +10
store.dispatch( {type: 'INCREASE', amount: 10});
console.log('after dispatch (+10) :', store.getState());

// -20
store.dispatch( {type: 'DECREASE', amount: 20});
console.log('after dispatch (-20) :', store.getState());

function increaseValue(amount) {
    return {
        type: 'INCREASE',
        amount
    }
}

function decreaseValue(amount) {
    return {
        type: 'DECREASE',
        amount
    }
}

store.dispatch( increaseValue(30) );
console.log('after dispatch (+30) :', store.getState());

store.dispatch( decreaseValue(40) );
console.log('after dispatch (-40) :', store.getState());