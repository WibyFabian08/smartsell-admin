import * as api from "../../api";

export const getCompanies = () => async (dispatch) => {
  try {
    const companies = await api.getCompanies();

    dispatch({ type: "SET_COMPANIES", value: companies.data });
  } catch (err) {
    dispatch({ type: "SET_STATUS", value: "error" });
  }
};

export const getCompany = (id) => async (dispatch) => {
  try {
    const company = await api.getCompany(id);

    dispatch({
      type: "SET_COMPANY_FORM",
      name: "address",
      value: company.data.address,
    });
    dispatch({
      type: "SET_COMPANY_FORM",
      name: "city",
      value: company.data.city,
    });
    dispatch({
      type: "SET_COMPANY_FORM",
      name: "country",
      value: company.data.country,
    });
    dispatch({
      type: "SET_COMPANY_FORM",
      name: "email",
      value: company.data.email,
    });
    dispatch({
      type: "SET_COMPANY_FORM",
      name: "industry",
      value: company.data.industry,
    });
    dispatch({
      type: "SET_COMPANY_FORM",
      name: "name",
      value: company.data.name,
    });
    dispatch({
      type: "SET_COMPANY_FORM",
      name: "phone",
      value: company.data.name,
    });
    dispatch({
      type: "SET_COMPANY_FORM",
      name: "province",
      value: company.data.province,
    });
    dispatch({
      type: "SET_COMPANY_FORM",
      name: "website",
      value: company.data.website,
    });
    dispatch({
      type: "SET_COMPANY_FORM",
      name: "companyPict",
      value: company.data.companyPict,
    });

    dispatch({ type: "SET_COMPANY", value: company.data });
  } catch (err) {
    dispatch({ type: "SET_STATUS", value: "error" });
  }
};

export const getCompanyEmployes = (id) => async (dispatch) => {
  try {
    const employes = await api.getCompanyEmployes(id);

    dispatch({ type: "SET_COMPANY_EMPLOYES", value: employes.data });
  } catch (err) {
    dispatch({ type: "SET_STATUS", value: "error" });
  }
};

export const createCompany = (data, history) => async (dispatch) => {
  dispatch({ type: "SET_LOADING", value: true });
  try {
    await api.createCompany(data);

    history.push("/company");

    dispatch({ type: "SET_LOADING", value: false });
    dispatch({ type: "SET_COMPANY_FORM_CLEAR" });
    dispatch({ type: "SET_STATUS", value: "success" });

    setTimeout(() => {
      dispatch({ type: "SET_STATUS", value: null });
    }, [5000]);
  } catch (err) {
    console.log(err?.response?.data?.message);
    dispatch({ type: "SET_STATUS", value: "error" });
  }
};

export const upudateCompany = (data, id, history) => async (dispatch) => {
  try {
    await api.upudateCompany(data, id);
    dispatch({ type: "SET_COMPANY_FORM_CLEAR" });
    dispatch({ type: "SET_STATUS", value: "success" });

    setTimeout(() => {
      dispatch({ type: "SET_STATUS", value: null });
    }, [5000]);

    history.push("/company");
  } catch (err) {
    dispatch({ type: "SET_STATUS", value: "error" });
  }
};

export const deleteCompany = (id) => async (dispatch) => {
  try {
    await api.deleteCompany(id);

    const companies = await api.getCompanies();

    dispatch({ type: "SET_COMPANIES", value: companies.data });

    dispatch({ type: "SET_STATUS", value: "success" });

    setTimeout(() => {
      dispatch({ type: "SET_STATUS", value: null });
    }, [5000]);
  } catch (err) {
    dispatch({ type: "SET_STATUS", value: "error" });
  }
};

export const createEmploye = (companyId, data, history) => async (dispatch) => {
  dispatch({ type: "SET_LOADING", value: true });
  try {
    await api.createEmploye(companyId, data);

    dispatch({ type: "SET_EMPLOYE_FORM_CLEAR" });
    dispatch({ type: "SET_LOADING", value: false });

    dispatch({ type: "SET_STATUS", value: "success" });

    setTimeout(() => {
      dispatch({ type: "SET_STATUS", value: null });
    }, [5000]);

    history.push(`/company/detail/${companyId}/employe`);
  } catch (err) {
    dispatch({ type: "SET_STATUS", value: "error" });
  }
};

export const getEmploye = (id) => async (dispatch) => {
  try {
    const employe = await api.getEmploye(id);

    dispatch({ type: "SET_EMPLOYE", value: employe.data });
    dispatch({
      type: "SET_EMPLOYE_FORM",
      name: "name",
      value: employe.data.name,
    });
    dispatch({
      type: "SET_EMPLOYE_FORM",
      name: "personalPhone",
      value: employe.data.personalPhone,
    });
    dispatch({
      type: "SET_EMPLOYE_FORM",
      name: "officePhone",
      value: employe.data.officePhone,
    });
    dispatch({
      type: "SET_EMPLOYE_FORM",
      name: "email",
      value: employe.data.email,
    });
    dispatch({
      type: "SET_EMPLOYE_FORM",
      name: "position",
      value: employe.data.position,
    });
  } catch (err) {
    dispatch({ type: "SET_STATUS", value: "error" });
  }
};

export const getEmployes = () => async (dispatch) => {
  try {
    const employes = await api.getEmployes();

    dispatch({ type: "SET_EMPLOYES", value: employes.data });
  } catch (err) {
    dispatch({ type: "SET_STATUS", value: "error" });
  }
};

export const updateEmploye =
  (id, data, history, companyId) => async (dispatch) => {
    dispatch({ type: "SET_LOADING", value: true });
    try {
      await api.updateEmploye(id, data);

      dispatch({ type: "SET_STATUS", value: "success" });

      setTimeout(() => {
        dispatch({ type: "SET_STATUS", value: null });
      }, [5000]);

      history.push(`/company/detail/${companyId}/employe`);
      dispatch({ type: "SET_LOADING", value: false });
    } catch (err) {
      dispatch({ type: "SET_STATUS", value: "error" });
    }
  };

export const deleteEmploye = (id, companyId) => async (dispatch) => {
  try {
    await api.deleteEmploye(id);

    const employes = await api.getCompanyEmployes(companyId);

    dispatch({ type: "SET_COMPANY_EMPLOYES", value: employes.data });

    dispatch({ type: "SET_STATUS", value: "success" });

    setTimeout(() => {
      dispatch({ type: "SET_STATUS", value: null });
    }, [5000]);
  } catch (err) {
    dispatch({ type: "SET_STATUS", value: "error" });
  }
};
