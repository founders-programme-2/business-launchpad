import React, { Component, Fragment } from 'react';
import GoalProgress from './Dashboard-ProgressGoal';
import * as C from './Journal.style';
import * as S from './Dashboard.style';
import * as V from './Dashboard-ProgressGoal.style';
import info from '../assets/info.svg';
import { Logo } from './CHeader.style';
import CHeader from './CHeader';
import FormAssemply from './Dashboard-FormAssemply';
import CFooter from './CFooter';

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <CHeader menu />
        <C.H1>
          hello <br />
          jane doe
        </C.H1>
        <FormAssemply />
        <S.TitleWrapper>
          <h2>Your progress:</h2>
          <Logo src={info} alt="Launchpad logo" primary />
        </S.TitleWrapper>
        <C.P>
          This timeline shows your current action plan as well as your journey
          to get here. Add and log your goals, mentor notes and reflections in
          your
          <V.SP>action plan journal.</V.SP>
        </C.P>

        <GoalProgress />
        <CFooter />
      </Fragment>
    );
  }
}

export default Dashboard;
