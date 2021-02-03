import axios from "axios";
import { tokenConfig } from "./auth";
import { createMessage } from "./messages";
import { GET_ERRORS, GET_RELATED_SENSORS } from "./types";

// GET MAINBOARD LIST

export const getRelatedSensors = (id) => (dispatch,getState) => {
    if (id !== undefined) {
        axios
            .get(`http://localhost:8000/api/sensors/list?mainboard_id=${id}`, tokenConfig(getState))
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
