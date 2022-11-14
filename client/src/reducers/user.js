import { GET_USER_PROFILE_FAIL, GET_USER_PROFILE_REQUEST, GET_USER_PROFILE_RESET, GET_USER_PROFILE_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_PROFILE_UPDATE_FAIL, USER_PROFILE_UPDATE_REQUEST, USER_PROFILE_UPDATE_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../types";

export const userLoginReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: payload
            }
        case USER_LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case USER_LOGOUT:
            return {
                ...state,
                loading: false,
                userInfo: []
            }
        default:
            return state
    }
}
export const userRegisterReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER_REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: payload
            }
        case USER_REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state
    }
}
export const userProfileReducer = (state = {user:{}}, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_USER_PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case GET_USER_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                user: payload
            }
        case GET_USER_PROFILE_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case GET_USER_PROFILE_RESET:
            return{
                ...state,
                user:{}
            }
        default:
            return state
    }
}
export const userProfileUpdateReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER_PROFILE_UPDATE_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case USER_PROFILE_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                success:true,
                userInfo: payload
            }
        case USER_PROFILE_UPDATE_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state
    }
}