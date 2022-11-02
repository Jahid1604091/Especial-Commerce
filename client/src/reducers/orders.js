import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_MY_ORDERS_DETAILS_FAIL, GET_MY_ORDERS_DETAILS_REQUEST, GET_MY_ORDERS_DETAILS_SUCCESS, GET_MY_ORDERS_FAIL, GET_MY_ORDERS_REQUEST, GET_MY_ORDERS_SUCCESS } from "../types";

export const createOrderReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                newOrder: payload
            }
        case CREATE_ORDER_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export const myOrdersReducer = (state = { orders: [], }, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_MY_ORDERS_REQUEST:
            return {
                ...state, loading: true
            }

        case GET_MY_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: payload
            }

        case GET_MY_ORDERS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }

        default:
            return state
    }
}

export const myOrderDetailsReducer = (state = { orderItems: [],shippingAddress:{} }, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_MY_ORDERS_DETAILS_REQUEST:
            return {
                ...state, loading: true
            }

        case GET_MY_ORDERS_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                order: payload
            }

        case GET_MY_ORDERS_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }

        default:
            return state
    }
}
