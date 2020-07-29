
import axios from 'axios';
import { setAlert } from './alert';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_PROFILE
} from './types';
import {backend} from "../global";
import {isEmpty} from "../utilities/validation/validation";


/**
 * performs a get request to the backend for the user of interest
 */
export const loadUser = () => async (dispatch) => {
    try {
        const res = await axios.get(backend.user_service + "/user/login");

        if(isEmpty(res.data)){
            throw "no data returned";
        }

        if(!isEmpty(res.data.err)){
            throw res.data.err;
        }

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};

/**
 * register attempts to register a user in our backend
 * @param {string} firstname
 * @param {string} lastname
 * @param {string} email
 * @param {string} username
 * @param {string} password
 */
export const register = ({ firstname, lastname, email, username, password }) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ firstname, lastname, email, username, password });

    try {
        const res = await axios.post(backend.user_service + '/user/signup', body, config);

        if(isEmpty(res.data)){
            throw "no data returned";
        }

        if(!isEmpty(res.data.err)){
            throw res.data.err;
        }

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data.id
        });

    } catch (err) {
        console.log(err)
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: REGISTER_FAIL
        });
    }
};

/**
 * login attempts to login a user in our backend
 * @param {string} username
 * @param {string} password
 */export const login = (username, password) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ username, password });

    try {
        const res = await axios.post(backend.user_service + '/user/login', body, config);
        if(isEmpty(res.data)){
            throw "no data returned";
        }

        if(!isEmpty(res.data.err)){
            throw res.data.err;
        }

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

    } catch (err) {

        if (err) {
            err.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: LOGIN_FAIL
        });
    }
};

/**
 * logout attempts to logout a user in our backend
 */
export const logout = () => (dispatch) => {
    // TODO: enhance this
    dispatch({ type: CLEAR_PROFILE });
    dispatch({ type: LOGOUT });
};