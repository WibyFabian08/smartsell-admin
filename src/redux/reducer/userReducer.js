const initialState = {
  users: [],
  user: null,
  isLoading: false,
  status: null,
};

const userState = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.value,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.value,
      };

    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.value,
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

export default userState;
