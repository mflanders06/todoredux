import * as actions from './ActionTypes';

export function authTrue(){
    return {
        type: actions.AUTH_TRUE
    }
}

export function authFalse(){
    return {
        type: actions.AUTH_FALSE
    }
}