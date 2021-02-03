import axios from "axios";

import { GET_SENSOR_VALUE_ITEM } from "./types";

// GET MAINBOARD LIST

export const getSensorValueItem = (mainboardID, sensorID) => ({
    type: GET_SENSOR_VALUE_ITEM,
    mainboard_id: mainboardID,
    sensor_id: sensorID,
});
