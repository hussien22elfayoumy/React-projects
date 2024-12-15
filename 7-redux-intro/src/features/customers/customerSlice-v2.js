const initialStateCustomer = {
  fullName: '',
  natonialID: '',
  createdAt: '',
};

export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case 'customer/createCustomer':
      return {
        ...state,
        fullName: action.payload.fullName,
        natonialID: action.payload.natonialID,
        createdAt: action.payload.createdAt,
      };

    case 'customer/updateName':
      return {
        ...state,
        fullName: action.payload.fullName,
      };

    default:
      return state;
  }
}

export function createCustomer(fullName, natonialID) {
  return {
    type: 'customer/createCustomer',
    payload: {
      fullName,
      natonialID,
      createdAt: new Date().toISOString(),
    },
  };
}

export function updateName(fullName) {
  return {
    type: 'customer/updateName',
    payload: fullName,
  };
}
