import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import userData from "../data/userData.json";

import { AdminLayout } from "../layout";
import { Chart, Card } from "../components";
import { getCompanies, getEmployes } from "../redux/action/companyAction";
import { getUsers } from "../redux/action/userAction";

const Home = () => {
  const dispatch = useDispatch();
  const { companies, employes } = useSelector((state) => state.companyState);
  const { users } = useSelector((state) => state.userState);

  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getEmployes());
  }, [dispatch]);

  return (
    <AdminLayout>
      <div className="flex flex-wrap items-center justify-between mb-5">
        <Card title="Company" qty={companies.length}></Card>
        <Card title="Employe" qty={employes.length}></Card>
        <Card title="User" qty={users.length}></Card>
      </div>
      <div className="p-5 mb-5 bg-white rounded-lg shadow-xl">
        <Chart
          title="Active User"
          data={userData}
          dataKey="Active User"
        ></Chart>
      </div>
    </AdminLayout>
  );
};

export default Home;
