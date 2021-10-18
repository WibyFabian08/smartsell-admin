import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { AdminLayout } from "../layout";
import { InputText, Button } from "../elements";
import { useSelector, useDispatch } from "react-redux";
import {
  createEmploye,
  getEmploye,
  updateEmploye,
} from "../redux/action/companyAction";

const CreateEmploye = ({ match }) => {
  const { employeForm, isLoading, employe } = useSelector(
    (state) => state.companyState
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const employeId = match.params.employeId;

  const handleChange = (e) => {
    dispatch({
      type: "SET_EMPLOYE_FORM",
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employeId) {
      dispatch(
        updateEmploye(employeId, employeForm, history, employe.companyId._id)
      );
    } else {
      dispatch(createEmploye(match.params.id, employeForm, history));
    }
  };

  useEffect(() => {
    if (match.params.employeId) {
      dispatch(getEmploye(match.params.employeId));
    } else {
      dispatch({ type: "SET_EMPLOYE_FORM_CLEAR" });
    }

    return () => {
      dispatch({ type: "SET_EMPLOYE", value: null });
    };
  }, [dispatch, match.params.employeId]);

  return (
    <AdminLayout>
      <h2 className="text-xl font-semibold">
        {employeId ? "Edit" : "New"} Employe
      </h2>
      <div className="w-full mt-5 mb-20 md:w-1/2">
        <form action="POST" onSubmit={(e) => handleSubmit(e)}>
          <InputText
            name="name"
            label="Name"
            type="text"
            value={employeForm.name}
            onChange={(e) => handleChange(e)}
            placeholder="Name"
            bordered
          ></InputText>
          <InputText
            name="personalPhone"
            label="Personal Phone"
            type="text"
            value={employeForm.personalPhone}
            onChange={(e) => handleChange(e)}
            placeholder="Personal Phone"
            bordered
          ></InputText>
          <InputText
            name="officePhone"
            label="Office Phone"
            type="text"
            value={employeForm.officePhone}
            onChange={(e) => handleChange(e)}
            placeholder="Office Phone"
            bordered
          ></InputText>
          <InputText
            name="email"
            label="Email"
            type="text"
            value={employeForm.email}
            onChange={(e) => handleChange(e)}
            placeholder="Email"
            bordered
          ></InputText>
          <InputText
            name="position"
            label="Position"
            type="text"
            value={employeForm.position}
            onChange={(e) => handleChange(e)}
            placeholder="Position"
            bordered
          ></InputText>
          <Button create>{isLoading ? "Loading..." : "Create"}</Button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default CreateEmploye;
