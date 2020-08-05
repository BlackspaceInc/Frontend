import axios from 'axios';
import store from '../store';
import { LOGOUT } from '../actions/types';
import { backend } from '../../global';

const api = axios.create({
    baseURL: backend.user_service,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : 'http://localhost:8000',
        'Access-Control-Allow-Credentials': 'true'
    },
});
/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired
 logout the user if the token has expired
 **/

api.interceptors.response.use(
    res => res,
    err => {
        if (err.response.data.msg === 'Token is not valid') {
            store.dispatch({ type: LOGOUT });
        }
        return Promise.reject(err);
    }
);

export default api;