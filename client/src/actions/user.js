import { GET_MY_ORDERS_RESET, GET_USER_PROFILE_FAIL, GET_USER_PROFILE_REQUEST, GET_USER_PROFILE_RESET, GET_USER_PROFILE_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_PROFILE_UPDATE_FAIL, USER_PROFILE_UPDATE_REQUEST, USER_PROFILE_UPDATE_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../types";
import { axios_instance } from "../utils/axios";

export const login = (email,password) => async(dispatch)=>{
    try {
        dispatch({
            type:USER_LOGIN_REQUEST
        })
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        const {data} = await axios_instance.post('/api/users/login',{email,password},config)
        
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('userInfo',JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.error ? error.response.data.error : error.message

        })
    }
}

export const register = (name,email,password) => async(dispatch)=>{
    try {
        dispatch({
            type:USER_REGISTER_REQUEST
        })
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        const {data} = await axios_instance.post('/api/users',{name,email,password},config)
        
        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        })
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('userInfo',JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.error ? error.response.data.error : error.message

        })
    }
}

export const getProfile = () => async(dispatch,getState)=>{
    const {userLogin:{userInfo:{token}}} = getState();
    try {
        dispatch({
            type:GET_USER_PROFILE_REQUEST
        })
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${token}`
            }
        }
        const {data} = await axios_instance.get('/api/users/profile',config)
        
        dispatch({
            type:GET_USER_PROFILE_SUCCESS,
            payload:data
        })

    } catch (error) {
        dispatch({
            type: GET_USER_PROFILE_FAIL,
            payload: error.response && error.response.data.error ? error.response.data.error : error.message

        })
    }
}

export const updateProfile = (userData) => async(dispatch,getState)=>{
    const {userLogin:{userInfo:{token}}} = getState();
    try {
        dispatch({
            type:USER_PROFILE_UPDATE_REQUEST
        })
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${token}`
            }
        }
        const {data} = await axios_instance.put('/api/users/profile',userData,config)
        
        dispatch({
            type:USER_PROFILE_UPDATE_SUCCESS,
            payload:data
        })
       
        
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('userInfo',JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_PROFILE_UPDATE_FAIL,
            payload: error.response && error.response.data.error ? error.response.data.error : error.message

        })
    }
}

export const logout = () => async(dispatch)=>{
    localStorage.removeItem('userInfo');
    dispatch({type: USER_LOGOUT,})
    dispatch({type: GET_USER_PROFILE_RESET,})
    dispatch({type: GET_MY_ORDERS_RESET,})

}