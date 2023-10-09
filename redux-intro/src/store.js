import accountReducer from "./features/accountSlice";
import customerReducer from "./features/customerSlice";

import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        account: accountReducer,
        customer: customerReducer
    }
})

export default store;

