const initialData = {
    title: 'React - DataChange Example',
    value: 0
};

function changeValue(state, action) {
    if ( action == 'INCREASE' ) {
        return { ...state, value: state.value + 1 };        
    }
    else {
        return { ...state, value: state.value - 1 };        
    }
}

const newData = changeValue(initialData, 'INCREASE');
console.log('newData after Increase:', newData);

const newData2 = changeValue(newData, 'DECREASE');
console.log('newData2 after decrease:', newData2);
