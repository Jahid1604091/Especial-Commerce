import { ADD_REVIEW_FAIL, ADD_REVIEW_REQUEST, ADD_REVIEW_SUCCESS, GET_PRODUCTS_FAIL, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_TOP_PRODUCTS_FAIL, GET_TOP_PRODUCTS_REQUEST, GET_TOP_PRODUCTS_SUCCESS } from "../types";

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
                products:payload.products,
                pages:payload.pages,
                page:payload.page
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

export const topProductReducer = (state={products:[]},action) =>{
    const {type,payload} = action;
    switch (type) {
        case GET_TOP_PRODUCTS_REQUEST:
            return {
                ...state,
                loading:true,
                products:[]
            }
        case GET_TOP_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading:false,
                products:payload.products,
            }
        case GET_TOP_PRODUCTS_FAIL:
            return {
                ...state,
                loading:false,
                error:true
            }
        default:
            return state
    }
}


export const reviewReducer = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_REVIEW_REQUEST:
            return {
                ...state, loading: true
            }

        case ADD_REVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                success:true
            }

        case ADD_REVIEW_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }

        default:
            return state
    }
}
