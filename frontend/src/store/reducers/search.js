import {CHANGE_SEARCH_FIELD} from '../actions/types'
const initialState = {
    searchField:'',
    filteredObjects:[]
}

export const searchObjects = (state=initialState,action={}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            const text = action.text;
            const objects = action.objects;
            const filteredObjectsAct = objects.filter(obj =>{
                return obj.description.toLowerCase().includes(text.toLowerCase());
            });
            // console.log(filteredObjectsAct);
            return {...state,searchField:text , filteredObjects:filteredObjectsAct};
    
        default:
            const initObjects = action.objects;
            // console.log("this is init objects");
            // console.log(initObjects);
            return {...state,filteredObjects:initObjects};
    }
} 