import axios from "axios";

import { GET_ERRORS, GET_SENSOR_TYPES, REGISTER_SENSOR_TYPE } from "./types";

import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";
// GET MAINBOARD LIST

export const registerSensorType = (description) => (dispatch, getState) => {
    axios
        .post(
            "http://localhost:8000/api/sensors/registersensortypes",
            description,
            tokenConfig(getState)
        )
        .then((res) => {
            dispatch(
                createMessage({
                    sensorRegistered: "New sensor type registered!",
                })
            );

            dispatch({
                type: REGISTER_SENSOR_TYPE,
                payload: res.data,
            });
        })
        .catch((err) => {
            const errors = {
                msg: err.response.data,
                status: err.response.status,
            };

            dispatch(returnErrors(err.response.data, err.response.status));

            dispatch({
                type: GET_ERRORS,
                payload: errors,
            });
        });
};
export const getSensorTypes = () => (dispatch,getState) => {
    axios
        .get("http://localhost:8000/api/sensors/registersensortypeslist" , tokenConfig(getState))
        .then((res) => {
            // console.log(`this is ${id}`);
            dispatch({
                type: GET_SENSOR_TYPES,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch(
                createMessage({
                    somethingWentWrong: "something went wrong. refresh !",
                })
            );
        });
};
