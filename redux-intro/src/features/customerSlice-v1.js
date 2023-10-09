const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
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

export { createCustomer, updateName };
export default customerReducer;
