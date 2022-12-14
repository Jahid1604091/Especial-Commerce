import { ADD_REVIEW_FAIL, ADD_REVIEW_REQUEST, ADD_REVIEW_SUCCESS, GET_PRODUCTS_FAIL, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_TOP_PRODUCTS_FAIL, GET_TOP_PRODUCTS_REQUEST, GET_TOP_PRODUCTS_SUCCESS, PRODUCTS_SEARCH_FAIL, PRODUCTS_SEARCH_REQUEST, PRODUCTS_SEARCH_SUCCESS } from "../types"
import { axios_instance } from "../utils/axios";

export const getAllProducts = (query='',perPage='') => async (dispatch) =>{
    try {
        dispatch({type:GET_PRODUCTS_REQUEST});

        const {data} =  await axios_instance.get(`/api/products?q=${query}&pageNumber=${perPage}`);
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

export const getTopProducts = () => async (dispatch) =>{
    try {
        dispatch({type:GET_TOP_PRODUCTS_REQUEST});

        const {data} =  await axios_instance.get(`/api/products/top`);
        dispatch({
            type:GET_TOP_PRODUCTS_SUCCESS,
            payload:data
        })
    } catch (error) {
       
        dispatch({
            type:GET_TOP_PRODUCTS_FAIL,
            payload:error.response && error.response.data.message ?
            error.response.data.message : error.message
        });
    }
}


export const addReview = (id,review) => async (dispatch, getState) => {
    const { userLogin: { userInfo: { token } } } = getState();
    try {
        dispatch({
            type: ADD_REVIEW_REQUEST
        })
        const config = {
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        const { data:{data} } = await axios_instance.post(`/api/products/${id}/review`,review,config)
    
        dispatch({
            type: ADD_REVIEW_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ADD_REVIEW_FAIL,
            payload: error.response && error.response.data.error ? error.response.data.error : error.message

        })
    }
}