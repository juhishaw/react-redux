import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./features/accountSlice";
import customerReducer from "./features/customerSlice";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

//COMBINE REDUCER 
const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer
})
  
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

