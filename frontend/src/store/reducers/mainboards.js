import { GET_MAINBOARDS_LIST } from '../actions/types.js';

const initialState = {
    mainboards: []
}

export default function (state=initialState , action) {
    switch (action.type) {
        case GET_MAINBOARDS_LIST:

            return {
                ...state,
                mainboards: action.payload
            };
    
        default:
            return state;
    }    
}