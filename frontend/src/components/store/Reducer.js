import * as actions from './ActionTypes';

const InitialState = {
      auth: 'false'
}

 const Reducer = (state = InitialState, action) => {

    switch (action.type){
        
        case actions.AUTH_TRUE: {
            return {...state, auth: 'true'}
        }

        case actions.AUTH_FALSE: {
            return {...state, auth: 'false'}
        }

        default: return state;
    }
}

export default Reducer;