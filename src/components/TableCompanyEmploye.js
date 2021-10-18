import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

const TableCompanyEmploye = ({ handleDelete }) => {
  const { companyEmployes } = useSelector((state) => state.companyState);
  const employes = companyEmployes.employeId ? companyEmployes?.employeId : [];

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 180,
    },
    {
      field: "position",
      headerName: "Position",
      width: 180,
    },
    {
      field: "personalPhone",
      headerName: "Phone",
      width: 180,
    },
    {
      field: "officePhone",
      headerName: "Office Phone",
      width: 180,
    },
    {
      field: "email",
      headerName: "Email",
      width: 180,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <Link to={`/company/${params.row._id}/edit/employe`}>
              <ModeEditOutlineOutlinedIcon
                style={{ color: "blue", marginRight: "5px" }}
              ></ModeEditOutlineOutlinedIcon>
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
        rows={employes}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        getRowId={(r) => r._id}
      />
    </div>
  );
};

export default TableCompanyEmploye;
