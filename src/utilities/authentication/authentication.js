import axios from "axios";

const setAuthToken = token => {
    if (token){
        // update request header for all future requests with the jwt token
        axios.defaults.headers.common["Authorization"] = token;
        localStorage.setItem('token', token);
    } else {
        delete axios.defaults.headers.common["Authorization"];
        localStorage.removeItem('token');
    }
}

export default setAuthToken;