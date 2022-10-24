import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';



import {productReducer} from './reducers/products';

const reducer = combineReducers({
    products:productReducer
})
const initialState = {}

//if multiple middleware then add in the array
const middleware = [thunk];
const store = createStore(reducer,initialState,composeWithDevTools(
    applyMiddleware(...middleware)
));

export default store;