import axios from "axios";

import { GET_SENSOR_TYPES } from "./types";

// GET MAINBOARD LIST

export const getSensorTypes = (id) => (dispatch) => {
    axios
        .get("http://localhost:8000/api/sensors/registersensortypeslist")
        .then((res) => {
            // console.log(`this is ${id}`);
            dispatch({
                type: GET_SENSOR_TYPES,
                payload: res.data,
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
