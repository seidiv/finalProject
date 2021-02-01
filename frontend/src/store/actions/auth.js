import axios from "axios";
import { returnErrors } from "./messages";
import { USER_LOADED, USER_LOADING, AUTH_ERROR , LOGIN_FAIL , LOGIN_SUCCESS} from "./types";

// CHECK TOKEN AND LOADING USER
export const loadUser = () => (dispatch, getState) => {
    // USER LOADING
    dispatch({ type: USER_LOADING });
    //   GET TOKEN FROM STATE
    const token = getState().auth.token;
    //   HEADERS
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    //   IF TOKEN ADDED TO HEADERS CONFIG
    if (token) {
        config.headers["Authorization"] = `Token ${token}`;
    }

    axios.get("http://localhost:8000/api/auth/user", config)
        .then((res) => {
            dispatch({
                type: USER_LOADED,
                payload: res.data,
            });
        }).catch(err => {
            dispatch(returnErrors(err.response.data,err.response.status));
            dispatch({
                type:AUTH_ERROR
            });
        })
};



// LOGIN USER
export const login = (username, password) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request Body
  const body = JSON.stringify({ username, password });

  axios
    .post('/api/auth/login', body, config)
    .then((res) => {
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