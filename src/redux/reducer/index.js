import { combineReducers } from "redux";
import userState from "./userReducer";
import companyState from "./companyReducer";
import adminState from './adminReducer'

const reducer = combineReducers({
  userState,
  companyState,
  adminState
});

export default reducer;
