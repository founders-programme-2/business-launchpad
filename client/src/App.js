import React from 'react';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Provider } from 'react-redux';
import { MyProvider } from './components/context/Context';
import store from './redux/store';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './redux/actions/authActions';

import GlobalStyle from './styles/globalStyle';
import './styles/reset.css';

import PrivateRoute from './components/privateRoute/PrivateRoute';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import Info from './components/Info';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import Resources from './components/Resources';
import Journal from './components/Journal';
import Error404 from './components/Error404';

import {
  LANDING_URL,
  LOGIN_URL,
  REGISTER_URL,
  INFO_URL,
  DASHBOARD_URL,
  CONTACT_URL,
  PRIVACY_URL,
  RESOURCES_URL,
  JOURNAL_URL,
  ERROR404_URL,
} from './constants';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = { LOGIN_URL };
  }
}

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MyProvider>
          <GlobalStyle />

          <Route exact path={LOGIN_URL} component={Login} />
          <Route exact path={REGISTER_URL} component={Register} />
          <Switch>
            <PrivateRoute exact path={LANDING_URL} component={Landing} />
            <PrivateRoute exact path={INFO_URL} component={Info} />
            <PrivateRoute exact path={DASHBOARD_URL} component={Dashboard} />
            <PrivateRoute exact path={CONTACT_URL} component={Contact} />
            <PrivateRoute exact path={PRIVACY_URL} component={Privacy} />
            <PrivateRoute exact path={RESOURCES_URL} component={Resources} />
            <PrivateRoute exact path={JOURNAL_URL} component={Journal} />
          </Switch>
          <Redirect to={ERROR404_URL} component={Error404} />
        </MyProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
