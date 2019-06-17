import React, { Component, Fragment } from 'react';
import { createDecipher } from 'crypto';
import * as S from './Journal.style';
import AddEntry from './Journal-AddEntry';
import Goal from './JournalGoal';
import fakeData from '../fakeData';

class Journal extends Component {
  state = {
    someState: '',
  };

  // componentDidMount() {
  //   axios.get('/account/goals').then(response => {
  //     response.map();
  //   });
  // }

  // function to render the goals in each section
  renderGoals = (data, component) => {
    if (data.length === 0) {
      return <S.P>No goals found. Make some now!</S.P>;
    }
    return data.map(goalData => {
      return <Goal {...goalData} />;
    });
  };

  render() {
    // separates all goal data into 'toDos' and 'completed' for easy rendering
    const toDo = [];
    const completed = [];
    fakeData.map(goal => {
      if (goal.checked) {
        completed.push(goal);
      } else {
        toDo.push(goal);
      }
    });
    return (
      <Fragment>
        <S.H1>
          Business <br /> Journal
        </S.H1>
        <S.P>
          Your journal is a place to log your goals, action points, mentor notes
          and reflections.
        </S.P>
        <S.P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{' '}
        </S.P>

        <S.Section>
          <S.H2>Add an entry:</S.H2>
          <AddEntry />
        </S.Section>

        <S.Section>
          <S.H2>Action Plan:</S.H2>
          <S.P>
            As you complete your goals, check them off and watch your business
            grow!
          </S.P>
          {this.renderGoals(toDo)}
        </S.Section>

        <S.Section>
          <S.H2>My Business History:</S.H2>
          {this.renderGoals(completed)}
        </S.Section>
      </Fragment>
    );
  }
}

export default Journal;
