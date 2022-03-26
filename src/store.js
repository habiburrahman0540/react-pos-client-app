import {createStore,combineReducers,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk"
import {ProductListReducer} from "./redux/reducers/ProductReducer"
import {CartItemsReducer} from "./redux/reducers/cartItemsReducer"
const initialState = {
    CartItemsReducer: {cartItems:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem('cartItems')):[]}
};

const reducers = combineReducers({
    productList:ProductListReducer,
    CartItemsReducer:CartItemsReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,initialState,composeEnhancer(applyMiddleware(thunk)))
export default store;