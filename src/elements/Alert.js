import React from "react";

import Alert from "@mui/material/Alert";

const AlertMessage = ({ status }) => {
  if (status === "success") {
    return (
      <div className="mb-5">
        <Alert severity="success">Success</Alert>
      </div>
    );
  }

  return (
    <div className="mb-5">
      <Alert severity="error">Something went wrong</Alert>
    </div>
  );
};

export default AlertMessage;
