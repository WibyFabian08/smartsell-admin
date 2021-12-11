import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/action/adminAction";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { adminDetail } = useSelector((state) => state.adminState);

  console.log(adminDetail);

  const handleLogout = () => {
    dispatch(logout);
  };

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="w-full bg-white shadow-xl">
      <div className="flex items-center justify-between px-5 py-5">
        <div className="flex items-center">
          <img src="/smart-logo.png" alt="smart-sell" />
          <h2 className="ml-3 text-xl font-bold text-indigo-800 md:text-2xl">
            SmartAdmin
          </h2>
        </div>
        <div
          className="relative flex items-center"
          style={{ cursor: "pointer" }}
          onClick={() => handleClick()}
        >
          <p className="mr-2 capitalize">{adminDetail && adminDetail.username}</p>
          <div
            className="mx-1 overflow-hidden bg-white rounded-full"
            style={{ height: 40, width: 40 }}
          >
            <img
              src={
                adminDetail
                  ? `https://smartsell-backend.herokuapp.com/${adminDetail.profilePict}`
                  : "/images/profile.png"
              }
              className="object-cover w-full h-full"
              alt="profile"
            />
          </div>
        </div>
        {show && (
          <div className="absolute bg-white border border-gray-200 rounded-md shadow-lg top-16 right-10">
            <div className="flex flex-col flex-start">
              <div></div>
              <Link
                to="/profile"
                className="py-2 transition-all duration-200 px-7 hover:bg-gray-300"
              >
                Profile
              </Link>
              <div
                onClick={() => handleLogout()}
                style={{ cursor: "pointer" }}
                className="py-2 transition-all duration-200 px-7 hover:bg-gray-300"
              >
                Sign Out
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
