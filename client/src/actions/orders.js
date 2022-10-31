import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS } from "../types";
import axios from 'axios';
//getState return all store states
export const createOrder = (order) => async (dispatch,getState) =>{
    
    const {userLogin:{userInfo:{token}}} = getState();
    try {
        dispatch({
            type:CREATE_ORDER_REQUEST
        })
        const config = {
            headers:{
                'Content-Type':'application/json',
                Authorization:`Bearer ${token}`
            }
        }
        const {data} = await axios.post('/api/orders',order,config)
        
        dispatch({
            type:CREATE_ORDER_SUCCESS,
            payload:data
        })
       
    } catch (error) {
        dispatch({
            type: CREATE_ORDER_FAIL,
            payload: error.response && error.response.data.error ? error.response.data.error : error.message

        })
    }
    // localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
}
