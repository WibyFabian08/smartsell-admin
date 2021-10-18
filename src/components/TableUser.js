import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';


const TableUser = ({ handleDelete }) => {
  const {users} = useSelector((state) => state.userState);
  const columns = [
    {
      field: "username",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <div
              className="overflow-hidden bg-white rounded-full"
              style={{ width: 30, height: 30 }}
            >
              <img
                src={`http://localhost:5000/${params.row.profilePict}`}
                alt="avatar"
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="ml-2">{params.row.username}</h2>
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "company",
      headerName: "Cpmpany",
      width: 130,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
    },
    {
      field: "city",
      headerName: "City",
      width: 120,
    },
    {
      field: "province",
      headerName: "Province",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <Link to={`/users/detail/${params.row._id}`}>
              <VisibilityOutlinedIcon
                style={{ color: "blue", marginRight: "5px" }}
              ></VisibilityOutlinedIcon>
            </Link>
            <DeleteOutlineIcon
              onClick={() => handleDelete(params.row._id)}
              style={{ color: "red", cursor: "pointer" }}
            ></DeleteOutlineIcon>
          </div>
        );
      },
    },
  ];

  return (
    <div className="bg-white shadow-xl" style={{ height: 450, width: "100%" }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        getRowId={(r) => r._id}
      />
    </div>
  );
};

export default TableUser;
