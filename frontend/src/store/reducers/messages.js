import {CREATE_MESSAGE} from '../actions/types';

const initialState = {

} 

export default function (state=initialState , action) {

    switch (action.type) {
// will there be some other pieces
        case CREATE_MESSAGE:
            return (state=action.payload)
        default:
            return state;
    }
}