import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS } from "../types";

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