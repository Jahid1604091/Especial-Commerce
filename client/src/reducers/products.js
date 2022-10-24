import { GET_PRODUCTS_FAIL, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "../types";

export const productReducer = (state={products:[]},action) =>{
    const {type,payload} = action;
    switch (type) {
        case GET_PRODUCTS_REQUEST:
            return {
                ...state,
                loading:true,
                products:[]
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading:false,
                products:payload
            }
        case GET_PRODUCTS_FAIL:
            return {
                ...state,
                loading:false,
                error:true
            }
        default:
            return state
    }
}