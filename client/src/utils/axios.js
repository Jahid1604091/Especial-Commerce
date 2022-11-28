import axios from 'axios';
import {URL} from "./constants";



/*const tokenString = sessionStorage.getItem('token');
const token = JSON.parse(tokenString);*/


// const { token } = AuthUser(); //throws error that you cannot use hook outside of a functional component


export const axios_instance = axios.create({
    baseURL: URL,
    // headers:{
    //     "Authorization" : `Bearer ${token}`
    // }
});

axios_instance.interceptors.request.use( req => {
        return req;
    }, err => {
        return Promise.reject(err);
    }
);
