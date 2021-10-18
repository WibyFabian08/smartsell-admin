const initialState = {
  companyForm: {
    name: "",
    industry: "",
    address: "",
    city: "",
    province: "",
    country: "",
    phone: "",
    website: "",
    email: "",
    companyPict: null,
  },
  employeForm: {
    name: "",
    personalPhone: "",
    officePhone: "",
    email: "",
    position: "",
  },
  previewImage: null,
  companies: [],
  company: null,
  companyEmployes: [],
  employe: null,
  employes: [],
  status: null,
  isLoading: false,
};

const companyState = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COMPANY_FORM":
      return {
        ...state,
        companyForm: {
          ...state.companyForm,
          [action.name]: action.value,
        },
      };

    case "SET_COMPANY_FORM_CLEAR":
      return {
        ...state,
        companyForm: {
          ...state.companyForm,
          name: "",
          industry: "",
          address: "",
          city: "",
          province: "",
          country: "",
          phone: "",
          website: "",
          email: "",
          companyPict: null,
        },
      };

    case "SET_EMPLOYE_FORM":
      return {
        ...state,
        employeForm: {
          ...state.employeForm,
          [action.name]: action.value,
        },
      };

    case "SET_EMPLOYE_FORM_CLEAR":
      return {
        ...state,
        employeForm: {
          ...state.employeForm,
          name: "",
          personalPhone: "",
          officePhone: "",
          email: "",
          position: "",
        },
      };

    case "SET_EMPLOYE":
      return {
        ...state,
        employe: action.value,
      };

    case "SET_EMPLOYES":
      return {
        ...state,
        employes: action.value,
      };

    case "SET_COMPANIES":
      return {
        ...state,
        companies: action.value,
      };

    case "SET_COMPANY_EMPLOYES":
      return {
        ...state,
        companyEmployes: action.value,
      };

    case "SET_PREVIEW_IMAGE":
      return {
        ...state,
        previewImage: action.value,
      };

    case "SET_COMPANY":
      return {
        ...state,
        company: action.value,
      };

    case "SET_STATUS":
      return {
        ...state,
        status: action.value,
      };

    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.value,
      };

    default:
      return state;
  }
};

export default companyState;
