import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const accountReducer = (state = initialStateAccount, { payload, type }) => {
  switch (type) {
    case "account/deposit":
      return { ...state, balance: state.balance + payload };

    case "account/withdraw":
      return { ...state, balance: state.balance - payload };

    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: payload.amount,
        loanPurpose: payload.purpose,
        balance: state.balance + payload.amount,
      };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
};

const customerReducer = (state = initialStateCustomer, { payload, type }) => {
    switch (type) {
      case "customer/createCustomer":
        return {
          ...state,
          fullName: payload.fullName,
          nationalID: payload.nationalID,
          createdAt: payload.createdAt,
        };
  
      case "customer/updateName":
        return { ...state, fullName: payload };
  
      default:
        return state;
    }
  };
  

//COMBINE REDUCER 
const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer
})
  
const store = createStore(rootReducer);
// store.dispatch({
//   type: "account/deposit",
//   payload: 500,
// });
// store.dispatch({
//   type: "account/withdraw",
//   payload: 200,
// });
// store.dispatch({
//   type: "account/requestLoan",
//   payload: {
//     amount: 1000,
//     purpose: "buy a car!",
//   },
// });
// store.dispatch({
//   type: "account/payLoan",
// });
// console.log("Hey Redux", store.getState());

//Action Creators

// const ACCOUNT_DEPOSIT = "account/deposit"

const deposit = (amount) => {
  return {
    type: "account/deposit",
    payload: amount,
  };
};
const withdraw = (amount) => {
  return {
    type: "account/withdraw",
    payload: amount,
  };
};
const requestLoan = (amount, purpose) => {
  return {
    type: "account/requestLoan",
    payload: {
      amount: amount,
      purpose: purpose,
    },
  };
};
const payLoan = () => {
  return { type: "account/payLoan" };
};

store.dispatch(deposit(500));
store.dispatch(withdraw(200));
store.dispatch(requestLoan(1000, "buy a car!"));
store.dispatch(payLoan());
console.log(store.getState());

const createCustomer = (fullName, nationalID) => {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      nationalID,
      createdAt: new Date().toISOString(),
    },
  };
};

const updateName = (fullName) => {
  return { type: "customer/updateName", payload: fullName };
};


store.dispatch(createCustomer('Juhi Shaw', 'QWE123'))
store.dispatch(updateName('Qwerty test'))

console.log(store.getState())