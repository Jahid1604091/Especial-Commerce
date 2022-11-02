import { ADD_PRODUCT_BY_ADMIN_FAIL, ADD_PRODUCT_BY_ADMIN_REQUEST, ADD_PRODUCT_BY_ADMIN_SUCCESS, DELETE_PRODUCT_BY_ADMIN_FAIL, DELETE_PRODUCT_BY_ADMIN_REQUEST, DELETE_PRODUCT_BY_ADMIN_SUCCESS, DELETE_USER_BY_ADMIN_FAIL, DELETE_USER_BY_ADMIN_REQUEST, DELETE_USER_BY_ADMIN_SUCCESS, GET_ORDERS_BY_ADMIN_FAIL, GET_ORDERS_BY_ADMIN_REQUEST, GET_ORDERS_BY_ADMIN_SUCCESS, GET_USERS_BY_ADMIN_FAIL, GET_USERS_BY_ADMIN_REQUEST, GET_USERS_BY_ADMIN_SUCCESS, UPDATE_PRODUCT_BY_ADMIN_FAIL, UPDATE_PRODUCT_BY_ADMIN_REQUEST, UPDATE_PRODUCT_BY_ADMIN_SUCCESS } from "../types";

export const usersListReducer = (state = { users: [], }, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_USERS_BY_ADMIN_REQUEST:
            return {
                ...state, loading: true
            }

        case GET_USERS_BY_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                users: payload
            }

        case GET_USERS_BY_ADMIN_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }

        default:
            return state
    }
}

export const deleteUserByAdminReducer = (state = { users: [], }, action) => {
    const { type, payload } = action;

    switch (type) {
        case DELETE_USER_BY_ADMIN_REQUEST:
            return {
                ...state, loading: true
            }

        case DELETE_USER_BY_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                users: payload
            }

        case DELETE_USER_BY_ADMIN_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }

        default:
            return state
    }
}

export const deleteProductByAdminReducer = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case DELETE_PRODUCT_BY_ADMIN_REQUEST:
            return {
                ...state, loading: true
            }

        case DELETE_PRODUCT_BY_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                
                success: true
            }

        case DELETE_PRODUCT_BY_ADMIN_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }

        default:
            return state
    }
}

export const addProductByAdminReducer = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_PRODUCT_BY_ADMIN_REQUEST:
            return {
                ...state, loading: true
            }

        case ADD_PRODUCT_BY_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                product:payload,
                success:true
                
            }

        case ADD_PRODUCT_BY_ADMIN_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }

        default:
            return state
    }
}

export const updateProductByAdminReducer = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case UPDATE_PRODUCT_BY_ADMIN_REQUEST:
            return {
                ...state, loading: true
            }

        case UPDATE_PRODUCT_BY_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                product:payload,
                success:true
                
            }

        case UPDATE_PRODUCT_BY_ADMIN_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }

        default:
            return state
    }
}

export const ordersListReducer = (state = { orders: [], }, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_ORDERS_BY_ADMIN_REQUEST:
            return {
                ...state, loading: true
            }

        case GET_ORDERS_BY_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: payload
            }

        case GET_ORDERS_BY_ADMIN_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }

        default:
            return state
    }
}
