import React, { useEffect } from "react";

import { AdminLayout } from "../layout";
import { TableCompany } from "../components";
import { Button, AlertMessage } from "../elements";
import { useDispatch, useSelector } from "react-redux";
import { getCompanies, deleteCompany } from "../redux/action/companyAction";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const ListCompany = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.companyState);

  const handleDelete = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to delete this company?.",
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(deleteCompany(id)),
        },
        {
          label: "No",
          onClick: () => console.log("Click No"),
        },
      ],
    });
  };

  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold">List Company</h2>
        <Button link label={"+ Create Company"} path="/company/create"></Button>
      </div>
      {status && <AlertMessage status={status}></AlertMessage>}
      <TableCompany handleDelete={handleDelete}></TableCompany>
    </AdminLayout>
  );
};

export default ListCompany;
