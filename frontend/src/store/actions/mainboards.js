import axios from "axios";
import { tokenConfig } from "./auth";
import { createMessage } from "./messages";
import { GET_ERRORS, GET_MAINBOARDS_LIST } from "./types";
import { host } from "./host";
// GET MAINBOARD LIST

export const getMainboards = () => (dispatch, getState) => {
    axios
        .get(host + "/api/mainboard/list", tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: GET_MAINBOARDS_LIST,
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
