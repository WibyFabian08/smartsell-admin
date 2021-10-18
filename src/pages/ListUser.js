import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AdminLayout } from "../layout";
import { TableUser } from "../components";
import { AlertMessage } from "../elements";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import { deleteUser, getUsers } from "../redux/action/userAction";

const ListUser = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.userState);

  console.log(status)

  const handleDelete = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to delete this user?.",
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(deleteUser(id)),
        },
        {
          label: "No",
          onClick: () => console.log("Click No"),
        },
      ],
    });
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold">List Users</h2>
      </div>
      {status && <AlertMessage status={status}></AlertMessage>}
      <TableUser handleDelete={handleDelete}></TableUser>
    </AdminLayout>
  );
};

export default ListUser;
