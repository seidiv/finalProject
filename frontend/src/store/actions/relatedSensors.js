import axios from "axios";
import { tokenConfig } from "./auth";
import { returnErrors, createMessage } from "./messages";
import { host } from "./host";
import { SAVE_MAINBOARD_ID, GET_RELATED_SENSORS, GET_ERRORS } from "./types";

// GET MAINBOARD LIST

export const getRelatedSensors = (id) => (dispatch, getState) => {
    if (id !== undefined) {
        axios
            .get(
                `${host}/api/sensors/list?mainboard_id=${id}`,
                tokenConfig(getState)
            )
            .then((res) => {
                // console.log(`this is ${id}`);
                dispatch({
                    type: GET_RELATED_SENSORS,
                    payload: res.data,
                    relatedMainboard: id,
                });
            })
            .catch((err) => {
                dispatch(
                    createMessage({
                        somethingWentWrong: "something went wrong. refresh !",
                    })
                );
            });
    }
};

export const registerNewSensor = ({ type_id, mainboard_id, description }) => (
    dispatch,
    getState
) => {
    // Request Body
    // console.log(mainboard_id);
    // console.log(description);
    const body = JSON.stringify({ type_id, mainboard_id, description });

    axios
        .post(host + "/api/sensors/registersensor", body, tokenConfig(getState))
        .then((res) => {
            dispatch(
                createMessage({
                    sensorRegistered: "New sensor registered!",
                })
            );
        })
        .catch((err) => {
            if (err.response !== undefined && err.response !== undefined)
                dispatch(returnErrors(err.response.data, err.response.status));

            dispatch({
                type: GET_ERRORS,
                payload: err,
            });
        });
};
export const saveMainboardID = (id) => ({
    type: SAVE_MAINBOARD_ID,
    relatedMainboard: id,
});
