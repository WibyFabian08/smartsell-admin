import React, { useRef } from "react";

import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useDispatch } from "react-redux";

const InputFile = ({ label, onChange, name }) => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handle = (e) => {
    onChange({
      target: {
        name: e.target.name,
        value: e.target.files[0],
      },
    });

    dispatch({ type: "SET_PREVIEW_IMAGE", value: e.target.files[0] });
  };

  return (
    <div className="w-full mb-5">
      <label htmlFor="username">{label}</label>
      <input
        type="file"
        name={name}
        className="hidden"
        onChange={(e) => handle(e)}
        ref={inputRef}
      />
      <button
        className="w-full px-4 py-2 mt-3 text-white transition-all duration-300 bg-green-500 rounded-lg hover:bg-green-400"
        onClick={() => inputRef?.current.click()}
      >
        <FileUploadIcon style={{ color: "white" }}></FileUploadIcon> Upload
      </button>
    </div>
  );
};

export default InputFile;
