import { GET_PRODUCTS_FAIL, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "../types"
import axios from 'axios';
export const getAllProducts = () => async (dispatch) =>{
    try {
        dispatch({type:GET_PRODUCTS_REQUEST});

        const {data} =  await axios.get('/api/products');
        dispatch({
            type:GET_PRODUCTS_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:GET_PRODUCTS_FAIL,
            payload:error.response && error.response.data.message ?
            error.response.data.message : error.message
        });
    }
}