import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../types";

export const cartReducer = (state = { cartItems: [] }, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_TO_CART:
            const existItem = state.cartItems.find(x => x._id === payload?._id);

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(c => c._id === existItem._id ? payload : c)
                }
            }
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, payload]
                }
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(c => c._id !== payload)
            }

        case CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
        default:
            return state
    }
}