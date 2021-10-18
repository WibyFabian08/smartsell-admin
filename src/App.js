import "./assets/css/style.css";

import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import {
  Home,
  ListUser,
  User,
  ListCompany,
  CreateCompany,
  Company,
  ListCompanyEmploye,
  CreateEmploye
} from "./pages";

import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  const history = createBrowserHistory({
    baseUrl: process.env.PUBLIC_URL,
  });

  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/users" component={ListUser}></Route>
          <Route exact path="/users/detail/:id" component={User}></Route>
          <Route exact path="/company" component={ListCompany}></Route>
          <Route
            exact
            path="/company/detail/:id/employe"
            component={ListCompanyEmploye}
          ></Route>
          <Route exact path="/company/detail/:id" component={Company}></Route>
          <Route exact path="/company/create" component={CreateCompany}></Route>
          <Route exact path="/company/:id/create/employe" component={CreateEmploye}></Route>
          <Route exact path="/company/:employeId/edit/employe" component={CreateEmploye}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
