import React, { Component, Fragment } from 'react';
import GoalProgress from './Dashboard-ProgressGoal.js'
import * as C from './Journal.style';
class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <C.H1>
          hello <br/>
        jane doe
      </C.H1>
<GoalProgress/>
        <CHeader menu />
        <h1>Dashboard</h1>
      </Fragment>
    );
  }
}

export default Dashboard;
