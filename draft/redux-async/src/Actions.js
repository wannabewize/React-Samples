export function increaseValue(amount) {
    return {
        type: 'INCREASE',
        amount
    }
}

export function increaseValueAsync(dispatch, amount) {
    setTimeout( () => {
        dispatch( increaseValue(amount) )
    }, 3000);
}