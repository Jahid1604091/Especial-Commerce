import { ADD_PRODUCT_BY_ADMIN_FAIL, ADD_PRODUCT_BY_ADMIN_REQUEST, ADD_PRODUCT_BY_ADMIN_SUCCESS, DELETE_PRODUCT_BY_ADMIN_FAIL, DELETE_PRODUCT_BY_ADMIN_REQUEST, DELETE_PRODUCT_BY_ADMIN_SUCCESS, DELETE_USER_BY_ADMIN_FAIL, DELETE_USER_BY_ADMIN_REQUEST, DELETE_USER_BY_ADMIN_SUCCESS, DELIVER_ORDER_BY_ADMIN_FAIL, DELIVER_ORDER_BY_ADMIN_REQUEST, DELIVER_ORDER_BY_ADMIN_SUCCESS, GET_ORDERS_BY_ADMIN_FAIL, GET_ORDERS_BY_ADMIN_REQUEST, GET_ORDERS_BY_ADMIN_SUCCESS, GET_USERS_BY_ADMIN_FAIL, GET_USERS_BY_ADMIN_REQUEST, GET_USERS_BY_ADMIN_SUCCESS, UPDATE_PRODUCT_BY_ADMIN_FAIL, UPDATE_PRODUCT_BY_ADMIN_REQUEST, UPDATE_PRODUCT_BY_ADMIN_SUCCESS } from "../types";
import { axios_instance } from "../utils/axios";
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
        const {data} = await axios_instance.get('/api/users',config)
        
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
        const {data} = await axios_instance.delete(`/api/users/${id}`,config)
        
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
        const {data} = await axios_instance.delete(`/api/products/${id}`,config)
        
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

export const addProductByAdmin = (product) => async(dispatch,getState)=>{
    const {userLogin:{userInfo:{token}}} = getState();
    try {
        dispatch({
            type:ADD_PRODUCT_BY_ADMIN_REQUEST
        })
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${token}`
            }
        }
        const {data:{data}} = await axios_instance.post(`/api/products`,product,config)
        
        dispatch({
            type:ADD_PRODUCT_BY_ADMIN_SUCCESS,
            payload:data
        })

    } catch (error) {
        dispatch({
            type: ADD_PRODUCT_BY_ADMIN_FAIL,
            payload: error.response && error.response.data.error ? error.response.data.error : error.message

        })
    }
}

export const updateProductByAdmin = (product) => async(dispatch,getState)=>{
    const {userLogin:{userInfo:{token}}} = getState();
    try {
        dispatch({
            type:UPDATE_PRODUCT_BY_ADMIN_REQUEST
        })
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${token}`
            }
        }
        const {data:{data}} = await axios_instance.put(`/api/products/${product._id}`,product,config)
        
        dispatch({
            type:UPDATE_PRODUCT_BY_ADMIN_SUCCESS,
            payload:data
        })

    } catch (error) {
        dispatch({
            type: UPDATE_PRODUCT_BY_ADMIN_FAIL,
            payload: error.response && error.response.data.error ? error.response.data.error : error.message

        })
    }
}

export const getAllOrders = () => async(dispatch,getState)=>{
    const {userLogin:{userInfo:{token}}} = getState();
    try {
        dispatch({
            type:GET_ORDERS_BY_ADMIN_REQUEST
        })
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${token}`
            }
        }
        const {data:{data}} = await axios_instance.get('/api/orders',config)

        dispatch({
            type:GET_ORDERS_BY_ADMIN_SUCCESS,
            payload:data
        })
       
    } catch (error) {
        dispatch({
            type: GET_ORDERS_BY_ADMIN_FAIL,
            payload: error.response && error.response.data.error ? error.response.data.error : error.message

        })
    }
}

export const deliverOrder = (id) => async (dispatch, getState) => {
    const { userLogin: { userInfo: { token } } } = getState();
    try {
        dispatch({
            type: DELIVER_ORDER_BY_ADMIN_REQUEST
        })
        const config = {
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        const { data:{data} } = await axios_instance.get(`/api/orders/${id}/mark-as-delivered`,config)
    
        dispatch({
            type: DELIVER_ORDER_BY_ADMIN_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: DELIVER_ORDER_BY_ADMIN_FAIL,
            payload: error.response && error.response.data.error ? error.response.data.error : error.message

        })
    }
}



