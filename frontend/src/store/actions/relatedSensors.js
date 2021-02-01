import axios from "axios";

import { GET_ERRORS, GET_RELATED_SENSORS } from "./types";

// GET MAINBOARD LIST

export const getRelatedSensors = (id) => (dispatch) => {
    axios
        .get(`http://localhost:8000/api/sensors/list?mainboard_id=${id}`)
        .then((res) => {
            // console.log(`this is ${id}`);
            dispatch({
                type: GET_RELATED_SENSORS,
                payload: res.data,
                relatedMainboard: id,
            });
        })
        .catch((err) => {
            console.log(err);
            // const errors = {
            //     msg: err.response.data,
            //     status: err.response.status
            // }
            // dispatch({
            //     type:GET_ERRORS,
            //     payload: errors
            // });
        });
};
