import axios from "axios";
import { returnErrors, createMessage } from "./messages";
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_MAINBOARD_SUCCESS,
    REGISTER_MAINBOARD_FAIL,
} from "./types";

// CHECK TOKEN AND LOADING USER
export const loadUser = () => (dispatch, getState) => {
    // USER LOADING
    dispatch({ type: USER_LOADING });

    axios
        .get("http://localhost:8000/api/auth/user", tokenConfig(getState))
        .then((res) => {
            // console.log("it really did");
            dispatch({
                type: USER_LOADED,
                payload: res.data,
            });
        })
        .catch((err) => {
            if (err.response !== undefined && err.response !== undefined)
                dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR,
            });
        });
};

// LOGIN USER
export const login = (username, password) => (dispatch) => {
    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    // Request Body
    const body = JSON.stringify({ username, password });

    axios
        .post("http://localhost:8000/api/auth/login", body, config)
        .then((res) => {
            if (res.data.user.is_mainboard == true && res.data.user.is_staff == false) {
                dispatch(
                    createMessage({
                        mainboardNotAllowed: "mainboards are not allowed !",
                    })
                );
            } else
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data,
                });
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: LOGIN_FAIL,
            });
        });
};

// LOGOUT USER

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
    axios
        .post(
            "http://localhost:8000/api/auth/logout/",
            null,
            tokenConfig(getState)
        )
        .then((res) => {
            // dispatch({ type: "CLEAR_LEADS" });
            dispatch({
                type: LOGOUT_SUCCESS,
            });
        })
        .catch((err) => {
            if (err.response !== undefined && err.response !== undefined)
                dispatch(returnErrors(err.response.data, err.response.status));
        });
};

// Register MainboardUser and Mainboard

// REGISTER USER
export const registerMainboard = ({
    username,
    password,
    email,
    description,
}) => (dispatch, getState) => {
    // Request Body
    const body = JSON.stringify({ username, email, password });

    axios
        .post(
            "http://localhost:8000/api/auth/register",
            body,
            tokenConfig(getState)
        )
        .then((res) => {
            const mainboard_user = res.data.user.id;
            console.log(mainboard_user);
            const mBody = JSON.stringify({ mainboard_user, description });
            axios.post(
                "http://localhost:8000/api/mainboard/register",
                mBody,
                tokenConfig(getState)
            );
        })
        .then((newRes) => {
            dispatch(
                createMessage({
                    mainboardRegistered: "New mainboard registered!",
                })
            );

            dispatch({
                type: REGISTER_MAINBOARD_SUCCESS,
                payload: newRes.data,
            });
        })
        .catch((err) => {
            if (err.response !== undefined && err.response !== undefined)
                dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: REGISTER_MAINBOARD_FAIL,
            });
        });
};

// Setup config with token - helper function
export const tokenConfig = (getState) => {
    // Get token from state
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    // If token, add to headers config
    if (token) {
        config.headers["Authorization"] = `Token ${token}`;
    }

    return config;
};
