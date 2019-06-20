import React, { Component, Fragment } from 'react';
import axios from 'axios';

import * as S from './Journal.style';
import AddEntry from './Journal-AddEntry';
import Goal from './JournalGoal';
import { MyContext } from './Context';

class Journal extends Component {
  state = {
    goals: [],
  };

  // queries database to retrieve all goals for current user on page load
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    const { _id } = this.context.state;
    axios
      .post('/account/allgoals', { _id })
      .then(goalsData => {
        this.setState({ goals: goalsData.data.data.goals });
      })
      .catch(err => err);
  }

  // function to render the goals in each section
  renderGoals = data => {
    if (data.length === 0) {
      return <S.P>No goals found. Make some now!</S.P>;
    }
    return data.map((goalData, ind) => {
      // eslint-disable-next-line no-underscore-dangle
      const key = goalData._id + ind;
      return <Goal {...goalData} key={key} />;
    });
  };

  render() {
    // separates all goal data into 'toDos' and 'completed' for easy rendering
    const toDo = [];
    const completed = [];
    const { goals: allGoals } = this.state;
    if (allGoals.length > 0) {
      allGoals.forEach(goal => {
        if (goal.completed) {
          completed.push(goal);
        } else {
          toDo.push(goal);
        }
      });
    }

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
// allows us to access context within the component
Journal.contextType = MyContext;

export default Journal;
