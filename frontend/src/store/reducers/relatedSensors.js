import { GET_RELATED_SENSORS, SAVE_MAINBOARD_ID } from "../actions/types.js";

const initialState = {
    sensors: [],
    mainboardID: "",
    sensorTypes: [],
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
        case SAVE_MAINBOARD_ID:
            return {
                ...state,
                mainboardID: action.relatedMainboard,
            };

        default:
            return state;
    }
}
