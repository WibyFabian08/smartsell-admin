import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { AdminLayout } from "../layout";
import { InputText, Button, InputFile } from "../elements";
import { createCompany } from "../redux/action/companyAction";

const CreateCompany = () => {
  const history = useHistory();
  const { companyForm, isLoading } = useSelector((state) => state.companyState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch({
      type: "SET_COMPANY_FORM",
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", companyForm.name);
    data.append("industry", companyForm.industry);
    data.append("address", companyForm.address);
    data.append("city", companyForm.city);
    data.append("province", companyForm.province);
    data.append("country", companyForm.country);
    data.append("phone", companyForm.phone);
    data.append("website", companyForm.website);
    data.append("email", companyForm.email);
    data.append("image", companyForm.companyPict);

    dispatch(createCompany(data, history));
  };

  useEffect(() => {
    dispatch({ type: "SET_COMPANY_FORM_CLEAR" });
  }, [dispatch]);

  return (
    <AdminLayout>
      <h2 className="text-xl font-semibold">New Company</h2>
      <form
        action="POST"
        onSubmit={(e) => handleSubmit(e)}
        encType="Multipart/Form-Data"
      >
        <div className="flex flex-wrap w-full mt-5 mb-10 -mx-5">
          <div className="w-1/2 px-5">
            <InputText
              name="name"
              label="Company Name"
              type="text"
              placeholder="Company Name"
              value={companyForm.name}
              onChange={(e) => handleChange(e)}
              bordered
            ></InputText>
            <InputText
              name="industry"
              label="Industry"
              type="text"
              placeholder="Company Industry"
              value={companyForm.industry}
              onChange={(e) => handleChange(e)}
              bordered
            ></InputText>
            <InputText
              name="address"
              label="Company Address"
              type="text"
              placeholder="Company Address"
              value={companyForm.address}
              onChange={(e) => handleChange(e)}
              bordered
            ></InputText>
            <InputText
              name="city"
              label="City"
              type="text"
              placeholder="City"
              value={companyForm.city}
              onChange={(e) => handleChange(e)}
              bordered
            ></InputText>
            <InputText
              name="province"
              label="Province"
              type="text"
              placeholder="Province"
              value={companyForm.province}
              onChange={(e) => handleChange(e)}
              bordered
            ></InputText>
          </div>
          <div className="w-1/2 px-5">
            <InputText
              name="country"
              label="Country"
              type="text"
              placeholder="Country"
              value={companyForm.country}
              onChange={(e) => handleChange(e)}
              bordered
            ></InputText>
            <InputText
              name="phone"
              label="Phone"
              type="text"
              placeholder="Phone"
              value={companyForm.phone}
              onChange={(e) => handleChange(e)}
              bordered
            ></InputText>
            <InputText
              name="website"
              label="Website"
              type="text"
              placeholder="Website"
              value={companyForm.website}
              onChange={(e) => handleChange(e)}
              bordered
            ></InputText>
            <InputText
              name="email"
              label="Email"
              type="text"
              placeholder="Email"
              value={companyForm.email}
              onChange={(e) => handleChange(e)}
              bordered
            ></InputText>
          </div>
          <div className="px-5">
            <Button create>{isLoading ? "Loading..." : "Create"}</Button>
          </div>
        </div>
      </form>
      {companyForm.companyPict && (
        <img
          src={
            companyForm.companyPict
              ? URL.createObjectURL(companyForm.companyPict)
              : ""
          }
          className="object-cover mb-3 h-60"
          alt="preview"
        />
      )}
      <InputFile
        type="button"
        name="companyPict"
        onChange={(e) => handleChange(e)}
        label="Upload Image"
      ></InputFile>
    </AdminLayout>
  );
};

export default CreateCompany;
