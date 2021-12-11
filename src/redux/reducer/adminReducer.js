const initialState = {
  adminForm: {
    image: null,
    address: "",
    province: "",
    city: "",
    postCode: "",
    phone: "",
    password: "",
    username: "",
    email: "",
  },
  adminDetail: null,
  isLoading: false,
  status: null,
};

const adminState = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ADMIN_FORM":
      return {
        ...state,
        adminForm: {
          ...state.adminForm,
          [action.name]: action.value,
        },
      };

    case "SET_ADMIN_DETAIL":
      return {
        ...state,
        adminDetail: action.value,
      };

    case "SET_STATUS":
      return {
        ...state,
        status: action.value,
      };

    default:
      return state;
  }
};

export default adminState;
