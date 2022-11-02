import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_MY_ORDERS_DETAILS_FAIL, GET_MY_ORDERS_DETAILS_REQUEST, GET_MY_ORDERS_DETAILS_SUCCESS, GET_MY_ORDERS_FAIL, GET_MY_ORDERS_REQUEST, GET_MY_ORDERS_SUCCESS } from "../types";
import axios from 'axios';
//getState return all store states
export const createOrder = (order) => async (dispatch, getState) => {

    const { userLogin: { userInfo: { token } } } = getState();
    try {
        dispatch({
            type: CREATE_ORDER_REQUEST
        })
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.post('/api/orders', order, config)

        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CREATE_ORDER_FAIL,
            payload: error.response && error.response.data.error ? error.response.data.error : error.message

        })
    }
    // localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
}


export const getMyOrders = () => async (dispatch, getState) => {
    const { userLogin: { userInfo: { token } } } = getState();
    try {
        dispatch({
            type: GET_MY_ORDERS_REQUEST
        })
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        const { data: { data } } = await axios.get('/api/orders/myorders', config)

        dispatch({
            type: GET_MY_ORDERS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_MY_ORDERS_FAIL,
            payload: error.response && error.response.data.error ? error.response.data.error : error.message

        })
    }
}


export const getMyOrderDetails = (id) => async (dispatch, getState) => {
    const { userLogin: { userInfo: { token } } } = getState();
    try {
        dispatch({
            type: GET_MY_ORDERS_DETAILS_REQUEST
        })
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const { data:{data} } = await axios.get(`/api/orders/myorders/${id}`, config)
    
        dispatch({
            type: GET_MY_ORDERS_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_MY_ORDERS_DETAILS_FAIL,
            payload: error.response && error.response.data.error ? error.response.data.error : error.message

        })
    }
}



