import {AUTH_STATE_CHANGED} from "./Actions";

export function authReducers(state = {user: null}, action) {
    switch (action.type) {
        case AUTH_STATE_CHANGED:
            return {...state, user: action.user};
        default:
            return state
    }
}