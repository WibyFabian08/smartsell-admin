import * as api from "../../api";

export const getAdmin = () => async (dispatch) => {
  try {
    const admin = await api.getAdmin("61b35c1b02a92e338415788b");

    localStorage.setItem('admin', JSON.stringify(admin.data))

    dispatch({type: "SET_ADMIN_DETAIL", value: admin.data})

    dispatch({
      type: "SET_ADMIN_FORM",
      name: "username",
      value: admin.data.username,
    });

    dispatch({
      type: "SET_ADMIN_FORM",
      name: "email",
      value: admin.data.email,
    });

    dispatch({
      type: "SET_ADMIN_FORM",
      name: "address",
      value: admin.data.address,
    });

    dispatch({
      type: "SET_ADMIN_FORM",
      name: "city",
      value: admin.data.city,
    });

    dispatch({
      type: "SET_ADMIN_FORM",
      name: "province",
      value: admin.data.province,
    });

    dispatch({
      type: "SET_ADMIN_FORM",
      name: "phone",
      value: admin.data.phone,
    });

  } catch (err) {
    console.log(err);
  }
};

export const updateAdmin = (id, data) => async (dispatch) => {
  try {
    const update = await api.updateAdmin(id, data);

    dispatch({ type: "SET_STATUS", value: "success" });
    dispatch({type: "SET_ADMIN_DETAIL", value: update.data})

    setTimeout(() => {
      dispatch({ type: "SET_STATUS", value: null });
    }, [5000]);

  } catch (err) {
    console.log(err);
  }
};

export const logout = () => {
    localStorage.clear();

    window.location.href = 'https://smart-sell-web-iota.vercel.app/'
}
