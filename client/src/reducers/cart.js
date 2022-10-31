import { ADD_TO_CART, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS, CLEAR_CART, REMOVE_FROM_CART } from "../types";

export const cartReducer = (state = { cartItems: [], shippingAddress:{} }, action) => {
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
            case CART_SAVE_SHIPPING_ADDRESS:
                return{
                    ...state,
                    shippingAddress:action.payload
                }
            case CART_SAVE_PAYMENT_METHOD:
                return{
                    ...state,
                    paymentMethod:action.payload
                }
        default:
            return state
    }
}