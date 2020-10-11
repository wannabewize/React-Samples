export function increaseValue(amount) {
    return {
        type: 'INCREASE',
        amount
    }
}

export function decreaseValue(amount) {
    return {
        type: 'DECREASE',
        amount
    }
}