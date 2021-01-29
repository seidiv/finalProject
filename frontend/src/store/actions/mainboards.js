import axios from 'axios';

import { GET_ERRORS, GET_MAINBOARDS_LIST } from './types';

// GET MAINBOARD LIST

export const getMainboards = () => dispatch => {
    axios.get('http://localhost:8000/api/mainboard/list')
        .then(res => {
            dispatch({
                type: GET_MAINBOARDS_LIST,
                payload: res.data
            });
        }).catch(err => {
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