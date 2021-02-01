import { GET_RELATED_SENSORS } from "../actions/types.js";

const initialState = {
    sensors: [], 
    mainboardID: "",
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_RELATED_SENSORS:
            // console.log(`action id is ${action.relatedMainboard}`);
            return {
                ...state,
                sensors: action.payload,
                mainboardID: action.relatedMainboard,
            };

        default:
            return state;
    }
}
