const initialState = {
    title: 'Redux Async Example',
    value: 0
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREASE':
            return { ...state, value: state.value + action.amount };
        default:
            return state
    }
}