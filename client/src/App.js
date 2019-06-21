import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './styles/reset.css';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/globalStyle';
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
import { MyProvider } from './components/context/Context';
import store from './redux/store';

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

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MyProvider>
          <GlobalStyle />
          <Switch>
            <Route exact path={LANDING_URL} component={Landing} />
            <Route exact path={LOGIN_URL} component={Login} />
            <Route exact path={REGISTER_URL} component={Register} />
            <Route exact path={INFO_URL} component={Info} />
            <Route exact path={DASHBOARD_URL} component={Dashboard} />
            <Route exact path={CONTACT_URL} component={Contact} />
            <Route exact path={PRIVACY_URL} component={Privacy} />
            <Route exact path={RESOURCES_URL} component={Resources} />
            <Route exact path={JOURNAL_URL} component={Journal} />
            <Redirect to={ERROR404_URL} component={Error404} />
          </Switch>
        </MyProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
