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
      </Fragment>
    );
  }
}

export default Dashboard;
