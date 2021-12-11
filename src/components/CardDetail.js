import React from "react";

import { Chart } from "../components";
import productStat from "../data/productStat.json";

import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MyLocationIcon from "@mui/icons-material/MyLocation";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import { useSelector } from "react-redux";

const CardDetail = ({ userDetail, companyDetail, statistik }) => {
  const { user } = useSelector((state) => state.userState);
  const { company } = useSelector((state) => state.companyState);

  if (statistik) {
    return (
      <>
        <h2 className="font-semibold">Sales per Month</h2>
        <Chart data={productStat} dataKey="Sales"></Chart>
      </>
    );
  }
  if (userDetail) {
    return (
      <>
        <div className="flex items-center">
          <div
            className="overflow-hidden bg-white rounded-full"
            style={{ width: 40, height: 40 }}
          >
            <img
              src={user ? `https://smartsell-backend.herokuapp.com//${user.profilePict}` : ""}
              alt="profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="ml-2 truncate ...">
            <h2 className="font-semibold">{user ? user.username : ""}</h2>
            <p className="text-sm text-gray-400 truncate ...">
              {user ? user.company : ""}
            </p>
          </div>
        </div>
        <div className="mt-5 truncate ...">
          <div className="mb-5">
            <p className="text-sm text-gray-400">Account Detail</p>
            <ul className="my-2">
              {user?.username && (
                <li className="flex items-center mb-2">
                  <PermIdentityIcon
                    style={{ color: "#555555" }}
                    fontSize="small"
                  ></PermIdentityIcon>
                  <p className="ml-2 text-sm">{user ? user.username : ""}</p>
                </li>
              )}
              {user?.company && (
                <li className="flex items-center">
                  <CalendarTodayIcon
                    style={{ color: "#555555" }}
                    fontSize="small"
                  ></CalendarTodayIcon>
                  <p className="ml-2 text-sm">{user ? user.company : ""}</p>
                </li>
              )}
            </ul>
          </div>
          <div>
            <p className="text-sm text-gray-400">Contact Detail</p>
            <ul className="my-2">
              {user?.phone && (
                <li className="flex items-center mb-2">
                  <PhoneIcon
                    style={{ color: "#555555" }}
                    fontSize="small"
                  ></PhoneIcon>
                  <p className="ml-2 text-sm">{user ? user.company : ""}</p>
                </li>
              )}
              {user?.email && (
                <li className="flex items-center mb-2">
                  <MailOutlineIcon
                    style={{ color: "#555555" }}
                    fontSize="small"
                  ></MailOutlineIcon>
                  <p className="ml-2 text-sm">{user ? user.email : ""}</p>
                </li>
              )}
              {user?.city && user.province && (
                <li className="flex items-center">
                  <MyLocationIcon
                    style={{ color: "#555555" }}
                    fontSize="small"
                  ></MyLocationIcon>
                  <p className="ml-2 text-sm">
                    {user ? user.city : ""} | {user ? user.province : ""}
                  </p>
                </li>
              )}
            </ul>
          </div>
        </div>
      </>
    );
  }

  if (companyDetail) {
    return (
      <>
        <div className="flex items-center">
          <div
            className="overflow-hidden bg-white rounded-full"
            style={{ width: 40, height: 40 }}
          >
            <img
              src={company ? `https://smartsell-backend.herokuapp.com/${company.companyPict}` : ""}
              alt="profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="ml-2">
            <h2 className="font-semibold">{company && company.name}</h2>
          </div>
        </div>
        <div className="mt-5 truncate ...">
          <div className="mb-5">
            <p className="text-sm text-gray-400">Product Detail</p>
            <ul className="my-2">
              <li className="flex items-center mb-2">
                <FormatListNumberedIcon
                  style={{ color: "#555555" }}
                  fontSize="small"
                ></FormatListNumberedIcon>
                <p className="ml-2 text-sm">{company && company.industry}</p>
              </li>
              <li className="flex items-center mb-2">
                <TrendingUpIcon
                  style={{ color: "#555555" }}
                  fontSize="small"
                ></TrendingUpIcon>
                <p className="ml-2 text-sm">{company && company.city}</p>
              </li>
              <li className="flex items-center mb-2">
                <EventAvailableIcon
                  style={{ color: "#555555" }}
                  fontSize="small"
                ></EventAvailableIcon>
                <p className="ml-2 text-sm">{company && company.email}</p>
              </li>
              <li className="flex items-center mb-2">
                <CompareArrowsIcon
                  style={{ color: "#555555" }}
                  fontSize="small"
                ></CompareArrowsIcon>
                <p className="ml-2 text-sm">{company && company.phone}</p>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex items-center">
        <div
          className="overflow-hidden bg-white rounded-full"
          style={{ width: 40, height: 40 }}
        >
          <img
            src="/images/profile.jpg"
            alt="profile"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="ml-2">
          <h2 className="font-semibold">Wiby Fabian Rianto</h2>
          <p className="text-sm text-gray-400">Software Engineer</p>
        </div>
      </div>
      <div className="mt-5 truncate ...">
        <div className="mb-5">
          <p className="text-sm text-gray-400">Account Detail</p>
          <ul className="my-2">
            <li className="flex items-center mb-2">
              <PermIdentityIcon
                style={{ color: "#555555" }}
                fontSize="small"
              ></PermIdentityIcon>
              <p className="ml-2 text-sm">Wiby Fabian Rianto</p>
            </li>
            <li className="flex items-center">
              <CalendarTodayIcon
                style={{ color: "#555555" }}
                fontSize="small"
              ></CalendarTodayIcon>
              <p className="ml-2 text-sm">19-12-1998</p>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm text-gray-400">Contact Detail</p>
          <ul className="my-2">
            <li className="flex items-center mb-2">
              <PhoneIcon
                style={{ color: "#555555" }}
                fontSize="small"
              ></PhoneIcon>
              <p className="ml-2 text-sm">089663191201</p>
            </li>
            <li className="flex items-center mb-2">
              <MailOutlineIcon
                style={{ color: "#555555" }}
                fontSize="small"
              ></MailOutlineIcon>
              <p className="ml-2 text-sm">wibyfabian08@gmail.com</p>
            </li>
            <li className="flex items-center">
              <MyLocationIcon
                style={{ color: "#555555" }}
                fontSize="small"
              ></MyLocationIcon>
              <p className="ml-2 text-sm">Garut | Indonesia</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
