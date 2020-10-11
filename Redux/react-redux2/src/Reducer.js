const initialState = {
    title: 'Redux - Store',
    value: 10
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREASE':
            return { ...state, value: state.value + action.amount };
        case 'DECREASE':
            return { ...state, value: state.value - action.amount };
        default:
            return state
    }
}