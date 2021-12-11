import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AdminLayout } from "../layout";
import { InputText, Button, InputFile, AlertMessage } from "../elements";
import { getAdmin, updateAdmin } from "../redux/action/adminAction";

const Profile = () => {
  const {adminForm, isLoading, status} = useSelector((state) => state.adminState);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch({
      type: "SET_ADMIN_FORM",
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("username", adminForm.username);
    data.append("email", adminForm.email);
    data.append("address", adminForm.address);
    data.append("city", adminForm.city);
    data.append("province", adminForm.province);
    data.append("phone", adminForm.phone);
    data.append("image", adminForm.image);

    dispatch(updateAdmin("61b35c1b02a92e338415788b", data));
  };

  useEffect(() => {
    dispatch({ type: "SET_COMPANY_FORM_CLEAR" });
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAdmin())
  }, [])

  return (
    <AdminLayout>
      <h2 className="text-xl font-semibold">Profile Admin</h2>
      {status && <AlertMessage status={status}></AlertMessage>}
      <form
        action="POST"
        onSubmit={(e) => handleSubmit(e)}
        encType="Multipart/Form-Data"
      >
        <div className="flex flex-wrap w-full mt-5 mb-10 -mx-5">
          <div className="w-1/2 px-5">
            <InputText
              name="username"
              label="Username"
              type="text"
              placeholder="Username"
              value={adminForm.username}
              onChange={(e) => handleChange(e)}
              bordered
            ></InputText>
            <InputText
              name="email"
              label="Email"
              type="text"
              placeholder="Email"
              value={adminForm.email}
              onChange={(e) => handleChange(e)}
              bordered
            ></InputText>
            <InputText
              name="address"
              label="Admin Address"
              type="text"
              placeholder="Address"
              value={adminForm.address}
              onChange={(e) => handleChange(e)}
              bordered
            ></InputText>
          </div>
          <div className="w-1/2 px-5">
            <InputText
              name="city"
              label="City"
              type="text"
              placeholder="City"
              value={adminForm.city}
              onChange={(e) => handleChange(e)}
              bordered
            ></InputText>
            <InputText
              name="province"
              label="Province"
              type="text"
              placeholder="Province"
              value={adminForm.province}
              onChange={(e) => handleChange(e)}
              bordered
            ></InputText>
            <InputText
              name="phone"
              label="Phone"
              type="text"
              placeholder="Phone"
              value={adminForm.phone}
              onChange={(e) => handleChange(e)}
              bordered
            ></InputText>
          </div>
          <div className="px-5">
            <Button create>{isLoading ? "Loading..." : "Update"}</Button>
          </div>
        </div>
      </form>
      {adminForm && (
        <img
          style={{display: adminForm.image ? 'block' : 'none'}}
          src={
            adminForm.image !== null
              ? URL.createObjectURL(adminForm.image)
              : ""
          }
          className="object-cover mb-3 h-60"
          alt="preview"
        />
      )}
      <InputFile
        type="button"
        name="image"
        onChange={(e) => handleChange(e)}
        label="Upload Image"
      ></InputFile>
    </AdminLayout>
  );
};

export default Profile;
