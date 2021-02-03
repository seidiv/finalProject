import { GET_SENSOR_VALUE_ITEM } from "../actions/types.js";

const initialState = {
    sensor_id: null,
    mainboard_id: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_SENSOR_VALUE_ITEM:
            return {
                ...state,
                mainboard_id: action.mainboard_id,
                sensor_id: action.sensor_id,
            };
        default:
            return state;
    }
}
