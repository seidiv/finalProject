import { GET_SENSOR_TYPES } from "../actions/types.js";

const initialState = {
    sensorTypes: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_SENSOR_TYPES:
            // console.log(`action id is ${action.relatedMainboard}`);
            return {
                ...state,
                sensorTypes: action.payload,
            };
        

        default:
            return state;
    }
}
