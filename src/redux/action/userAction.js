import * as api from "../../api";

export const getUsers = () => async (dispatch) => {
  try {
    const users = await api.getUsers();

    dispatch({ type: "SET_USERS", value: users.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: "SET_STATUS", value: "error" });
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    const user = await api.getUser(id);

    dispatch({ type: "SET_USER", value: user.data });
  } catch (err) {
    dispatch({ type: "SET_STATUS", value: "error" });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await api.deleteUser(id);

    const users = await api.getUsers();

    dispatch({ type: "SET_USERS", value: users.data });
    dispatch({ type: "SET_STATUS", value: "success" });

    setTimeout(() => {
      dispatch({ type: "SET_STATUS", value: null });
    }, 5000);
  } catch (err) {
    dispatch({ type: "SET_STATUS", value: "success" });
  }
};
