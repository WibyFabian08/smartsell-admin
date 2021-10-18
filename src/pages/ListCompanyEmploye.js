import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AdminLayout } from "../layout";
import { TableCompanyEmploye } from "../components";
import { Button, AlertMessage } from "../elements";
import {
  deleteEmploye,
  getCompanyEmployes,
} from "../redux/action/companyAction";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const ListCompanyEmploye = ({ match }) => {
  const dispatch = useDispatch();
  const { companyEmployes, status } = useSelector(
    (state) => state.companyState
  );

  const handleDelete = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to delete this emlpoye?.",
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(deleteEmploye(id, match.params.id)),
        },
        {
          label: "No",
          onClick: () => console.log("Click No"),
        },
      ],
    });
  };

  useEffect(() => {
    dispatch(getCompanyEmployes(match.params.id));

    return () => {
      dispatch({ type: "SET_COMPANY_EMPLOYES", value: [] });
    };
  }, [dispatch, match.params.id]);

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold">
          {companyEmployes?.name} Employes
        </h2>
        <Button
          link
          label={"+ Add Employe"}
          path={`/company/${match.params.id}/create/employe`}
        ></Button>
      </div>
      {status && <AlertMessage status={status}></AlertMessage>}
      <TableCompanyEmploye handleDelete={handleDelete}></TableCompanyEmploye>
    </AdminLayout>
  );
};

export default ListCompanyEmploye;
