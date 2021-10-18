import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = JSON.parse(localStorage.getItem("user")).token;
  }

  return req;
});

export const login = (data) => API.post("/auth/login", data);
export const register = (data) => API.post("/auth/register", data);

export const getUsers = () => API.get("/user");
export const getUser = (id) => API.get(`/user/${id}`);
export const deleteUser = (id) => API.delete(`/user/${id}/delete`);

export const getCompanies = () => API.get("/company");
export const getCompany = (id) => API.get(`/company/find/${id}`);
export const getCompanyEmployes = (id) =>
  API.get(`/company/find/${id}/employe`);
export const createCompany = (data) => API.post("/company/create", data);
export const upudateCompany = (data, id) =>
  API.put(`/company/${id}/edit`, data);
export const deleteCompany = (id) => API.delete(`/company/${id}/delete`);

export const getEmploye = (id) => API.get(`/employe/${id}`);
export const getEmployes = () => API.get('/employe');
export const createEmploye = (companyId, data) =>
  API.post(`/employe/${companyId}/create`, data);
export const updateEmploye = (id, data) =>
  API.put(`employe/${id}/edit`, data);
export const deleteEmploye = (id) => API.delete(`employe/${id}/delete`);
