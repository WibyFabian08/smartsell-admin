import React from "react";
import { useSelector } from "react-redux";

import { InputText, Button, InputFile } from "../elements";

const CardEdit = ({
  label,
  userEdit,
  companyDetail,
  onChange,
  handleSubmit,
}) => {
  const { user } = useSelector((state) => state.userState);
  const { companyForm, previewImage } = useSelector(
    (state) => state.companyState
  );

  if (userEdit) {
    return (
      <div>
        <h2 className="text-xl font-semibold">{label}</h2>
        <div className="flex flex-wrap-reverse mt-5">
          <div className="w-full md:w-1/2">
            <form action="POST" onSubmit={(e) => handleSubmit(e)}>
              <InputText
                name="username"
                type="text"
                label="Username"
                value={user && user?.username}
              ></InputText>
              <InputText
                name="email"
                type="email"
                label="Email"
                value={user && user?.email}
              ></InputText>
              <InputText
                type="text"
                label="Phone"
                value={user && user?.phone}
              ></InputText>
              <InputText
                type="text"
                label="Address"
                value={
                  user &&
                  `${user.address ? user?.address : ""} ${
                    user.city ? user?.city : ""
                  } ${user.province ? user?.province : ""}`
                }
              ></InputText>
            </form>
          </div>
          {user && user?.profilePict && (
            <div className="w-full px-0 mb-5 md:px-5 md:w-1/2 md:mb-0">
              <img
                src={
                  user.profilePict &&
                  `https://smartsell-backend.herokuapp.com//${user.profilePict}`
                }
                className="object-cover w-full rounded-lg"
                alt="profile"
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  if (companyDetail) {
    return (
      <div>
        <h2 className="text-xl font-semibold">{label}</h2>
        <div className="flex flex-wrap-reverse mt-5">
          <div className="w-full md:w-1/2">
            <form
              action="POST"
              onSubmit={(e) => handleSubmit(e)}
              encType="Multipart/Form-Data"
            >
              <InputText
                name="name"
                value={companyForm.name}
                onChange={onChange}
                type="text"
                label="Company Name"
                placeholder="Company Name"
              ></InputText>
              <InputText
                name="industry"
                value={companyForm.industry}
                onChange={onChange}
                type="text"
                label="Company Industry"
                placeholder="Industry"
              ></InputText>
              <InputText
                name="address"
                value={companyForm.address}
                onChange={onChange}
                type="text"
                label="Company Address"
                placeholder="Address"
              ></InputText>
              <InputText
                name="province"
                value={companyForm.province}
                onChange={onChange}
                type="text"
                label="Province"
                placeholder="Province"
              ></InputText>
              <InputText
                name="city"
                value={companyForm.city}
                onChange={onChange}
                type="text"
                label="City"
                placeholder="City"
              ></InputText>
              <InputText
                name="country"
                value={companyForm.country}
                onChange={onChange}
                type="text"
                label="Country"
                placeholder="Country"
              ></InputText>
              <InputText
                name="phone"
                value={companyForm.phone}
                onChange={onChange}
                type="text"
                label="Phone"
                placeholder="Phone"
              ></InputText>
              <InputText
                name="website"
                value={companyForm.website}
                onChange={onChange}
                type="text"
                label="Website"
                placeholder="Website"
              ></InputText>
              <InputText
                name="email"
                value={companyForm.email}
                onChange={onChange}
                type="text"
                label="Email"
                placeholder="Email"
              ></InputText>
              <Button edit></Button>
            </form>
          </div>
          <div className="w-full px-0 mb-5 md:px-5 md:w-1/2 md:mb-0">
            <img
              src={
                previewImage
                  ? URL.createObjectURL(previewImage)
                  : `https://smartsell-backend.herokuapp.com/${companyForm.companyPict}`
              }
              className="object-cover w-full rounded-lg"
              alt="profile"
            />
            <InputFile name="companyPict" onChange={onChange}></InputFile>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-semibold">{label}</h2>
      <div className="flex flex-wrap-reverse mt-5">
        <div className="w-full md:w-1/2">
          <form action="POST" onSubmit={(e) => handleSubmit(e)}>
            <InputText
              type="text"
              label="Username"
              placeholder="will08"
            ></InputText>
            <InputText
              type="text"
              label="Full Name"
              placeholder="Wiby Fabian Rianto"
            ></InputText>
            <InputText
              type="email"
              label="Email"
              placeholder="wibyfabian08@gmail.com"
            ></InputText>
            <InputText
              type="text"
              label="Phone"
              placeholder="089663191201"
            ></InputText>
            <InputText
              type="text"
              label="Address"
              placeholder="Garut, Indonesia"
            ></InputText>
            <Button edit></Button>
          </form>
        </div>
        <div className="w-full px-0 mb-5 md:px-5 md:w-1/2 md:mb-0">
          <img
            src="/images/profile.jpg"
            className="object-cover w-full rounded-lg"
            alt="profile"
          />
          <InputFile></InputFile>
        </div>
      </div>
    </div>
  );
};

export default CardEdit;
