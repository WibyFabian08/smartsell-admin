import React, { useEffect } from "react";
import { useHistory } from "react-router";

import { AdminLayout } from "../layout";
import { CardDetail, CardEdit } from "../components";
import { useDispatch, useSelector } from "react-redux";

import { getCompany, upudateCompany } from "../redux/action/companyAction";

const Company = ({ match }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { companyForm, previewImage } = useSelector(
    (state) => state.companyState
  );

  const handleChange = (e) => {
    dispatch({
      type: "SET_COMPANY_FORM",
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    companyForm.companyPict = previewImage
      ? previewImage
      : companyForm.companyPict;

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

    dispatch(upudateCompany(data, match.params.id, history));
  };

  useEffect(() => {
    dispatch(getCompany(match.params.id));

    return () => {
      dispatch({ type: "SET_COMPANY", value: null });
    };
  }, [dispatch, match.params.id]);

  useEffect(() => {
    dispatch({ type: "SET_PREVIEW_IMAGE", value: null });
  }, [dispatch, match.params.id]);

  return (
    <AdminLayout>
      <h2 className="text-xl font-semibold">Profile Company</h2>
      <div className="flex flex-wrap w-full mt-5 -mx-2">
        <div className="w-full px-2 mb-5 md:w-1/3 md:mb-0">
          <div className="p-5 bg-white rounded-lg shadow-xl">
            <CardDetail companyDetail></CardDetail>
          </div>
        </div>
        <div className="w-full px-2 md:w-2/3">
          <div className="p-5 bg-white rounded-lg shadow-xl">
            <CardEdit
              label="Edit Company"
              companyDetail
              handleSubmit={handleSubmit}
              onChange={(e) => handleChange(e)}
            ></CardEdit>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Company;
