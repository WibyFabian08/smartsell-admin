import { combineReducers } from "redux";
import userState from "./userReducer";
import companyState from "./companyReducer";

const reducer = combineReducers({
  userState,
  companyState,
});

export default reducer;
