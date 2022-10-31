import { DELETE_PRODUCT_BY_ADMIN_FAIL, DELETE_PRODUCT_BY_ADMIN_REQUEST, DELETE_PRODUCT_BY_ADMIN_SUCCESS, DELETE_USER_BY_ADMIN_FAIL, DELETE_USER_BY_ADMIN_REQUEST, DELETE_USER_BY_ADMIN_SUCCESS, GET_USERS_BY_ADMIN_FAIL, GET_USERS_BY_ADMIN_REQUEST, GET_USERS_BY_ADMIN_SUCCESS } from "../types";
import axios from 'axios'
export const getAllUsers = () => async(dispatch,getState)=>{
    const {userLogin:{userInfo:{token}}} = getState();
    try {
        dispatch({
            type:GET_USERS_BY_ADMIN_REQUEST
        })
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${token}`
            }
        }
        const {data} = await axios.get('/api/users',config)
        
        dispatch({
            type:GET_USERS_BY_ADMIN_SUCCESS,
            payload:data
        })
       
    } catch (error) {
        dispatch({
            type: GET_USERS_BY_ADMIN_FAIL,
            payload: error.response && error.response.data.error ? error.response.data.error : error.message

        })
    }
}

export const deleteUserByAdmin = (id) => async(dispatch,getState)=>{
    const {userLogin:{userInfo:{token}}} = getState();
    try {
        dispatch({
            type:DELETE_USER_BY_ADMIN_REQUEST
        })
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${token}`
            }
        }
        const {data} = await axios.delete(`/api/users/${id}`,config)
        
        dispatch({
            type:DELETE_USER_BY_ADMIN_SUCCESS,
            payload:data
        })
       
    } catch (error) {
        dispatch({
            type: DELETE_USER_BY_ADMIN_FAIL,
            payload: error.response && error.response.data.error ? error.response.data.error : error.message

        })
    }
}

export const deleteProductByAdmin = (id) => async(dispatch,getState)=>{
    const {userLogin:{userInfo:{token}}} = getState();
    try {
        dispatch({
            type:DELETE_PRODUCT_BY_ADMIN_REQUEST
        })
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${token}`
            }
        }
        const {data} = await axios.delete(`/api/products/${id}`,config)
        
        dispatch({
            type:DELETE_PRODUCT_BY_ADMIN_SUCCESS,
            payload:data
        })

    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_BY_ADMIN_FAIL,
            payload: error.response && error.response.data.error ? error.response.data.error : error.message

        })
    }
}

