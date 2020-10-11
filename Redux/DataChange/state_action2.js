const initialData = {
    title: 'React - DataChange Example',
    value: 0
};

function changeValue(state, action) {
    switch (action.type) {
        case 'INCREASE':
            return { ...state, value: state.value + action.amount };
        case 'DECREASE':
            return { ...state, value: state.value - action.amount };
        default:
            return state;
    }
}

const newData = changeValue(initialData, {type:'INCREASE', amount:2});
console.log('newData after Increase:', newData);

const newData2 = changeValue(newData, {type:'DECREASE', amount:3});
console.log('newData2 after decrease:', newData2);
