// a meeting place for other reducers
import { combineReducers } from "redux";
import mainboards from "./mainboards";
import errors from "./errors";
import messages from "./messages";
import { searchObjects } from "./search";
import auth from "./auth";
import relatedSensors from "./relatedSensors";
import sensorTypes from "./sensorTypes";
import sensorValueItem from "./sensorValueItem";

export default combineReducers({
    mainboards,
    errors,
    messages,
    searchObjects,
    auth,
    relatedSensors,
    sensorTypes,
    sensorValueItem,
});
