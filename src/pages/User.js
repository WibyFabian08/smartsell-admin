import React, { useEffect } from "react";

import { AdminLayout } from "../layout";
import { CardDetail, CardEdit } from "../components";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/action/userAction";

const User = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(match.params.id));

    return () => {
      dispatch({ type: "SET_USER", value: null });
    };
  }, [dispatch, match.params.id]);

  return (
    <AdminLayout>
      <h2 className="text-xl font-semibold">Profile User</h2>
      <div className="flex flex-wrap w-full mt-5 -mx-2">
        <div className="w-full px-2 mb-5 md:w-1/3 md:mb-0">
          <div className="p-5 bg-white rounded-lg shadow-xl">
            <CardDetail userDetail></CardDetail>
          </div>
        </div>
        <div className="w-full px-2 md:w-2/3">
          <div className="p-5 bg-white rounded-lg shadow-xl">
            <CardEdit label="Detail User" userEdit></CardEdit>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default User;
