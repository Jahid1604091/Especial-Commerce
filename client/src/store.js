import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productReducer, reviewReducer, topProductReducer } from './reducers/products';
import { cartReducer } from './reducers/cart';
import { userLoginReducer, userProfileReducer, userProfileUpdateReducer, userRegisterReducer } from './reducers/user';
import { createOrderReducer, myOrderDetailsReducer, myOrdersReducer, orderPayReducer } from './reducers/orders';
import { addProductByAdminReducer, deleteProductByAdminReducer, deleteUserByAdminReducer, orderDeliverReducer, ordersListReducer, updateProductByAdminReducer, usersListReducer } from './reducers/admin';


const reducer = combineReducers({
    products: productReducer,
    topProducts: topProductReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userProfile: userProfileReducer,
    userProfileUpdate: userProfileUpdateReducer,
    usersList:usersListReducer,
    ordersList:ordersListReducer,
    myOrders:myOrdersReducer,
    myOrderDetails:myOrderDetailsReducer,
    createdOrder:createOrderReducer,
    orderPay:orderPayReducer,
    addReview:reviewReducer,

    deleteUserByAdmin:deleteUserByAdminReducer,
    deleteProductByAdmin:deleteProductByAdminReducer,
    addProductByAdmin:addProductByAdminReducer,
    updateProductByAdmin:updateProductByAdminReducer,
    orderDeliver:orderDeliverReducer,

});

const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : [];

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {};

const paymentMethodFromStorage = localStorage.getItem('paymentMethod') ?
    JSON.parse(localStorage.getItem('paymentMethod')) : {};

const userInfoFromLocalStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : [];


const initialState = {
    cart: {
        cartItems: cartItemsFromLocalStorage,
        shippingAddress: shippingAddressFromStorage,
        paymentMethod: paymentMethodFromStorage,
    },
    userLogin: { userInfo: userInfoFromLocalStorage },

}

//if multiple middleware then add in the array
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(
    applyMiddleware(...middleware)
));

export default store;