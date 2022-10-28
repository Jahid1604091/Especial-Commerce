import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productReducer } from './reducers/products';
import { cartReducer } from './reducers/cart';
import { userLoginReducer, userRegisterReducer } from './reducers/user';


const reducer = combineReducers({
    products: productReducer,
    cart:cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
   
});

const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : [];

const userInfoFromLocalStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : [];

const initialState = {
    cart: { cartItems: cartItemsFromLocalStorage },
    userLogin:{userInfo:userInfoFromLocalStorage}
}

//if multiple middleware then add in the array
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(
    applyMiddleware(...middleware)
));

export default store;