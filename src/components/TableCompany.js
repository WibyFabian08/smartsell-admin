import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const TableCompany = ({ handleDelete }) => {
  const { companies } = useSelector((state) => state.companyState);

  const columns = [
    {
      field: "name",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <div
              className="overflow-hidden bg-white rounded-full"
              style={{ width: 30, height: 30 }}
            >
              <img
                src={`https://smartsell-backend.herokuapp.com/${params.row.companyPict}`}
                alt="avatar"
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="ml-2">{params.row.name}</h2>
          </div>
        );
      },
    },
    {
      field: "industry",
      headerName: "Industry",
      width: 150,
    },
    {
      field: "website",
      headerName: "Website",
      width: 180,
    },
    {
      field: "email",
      headerName: "Email",
      width: 180,
    },
    {
      field: "city",
      headerName: "Address",
      width: 180,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <Link to={`/company/detail/${params.row._id}`}>
              <ModeEditOutlineOutlinedIcon
                style={{ color: "blue", marginRight: "5px" }}
              ></ModeEditOutlineOutlinedIcon>
            </Link>
            <Link to={`/company/detail/${params.row._id}/employe`}>
              <VisibilityOutlinedIcon
                style={{ color: "lightgreen", marginRight: "5px" }}
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
        rows={companies}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        getRowId={(r) => r._id}
      />
    </div>
  );
};

export default TableCompany;
