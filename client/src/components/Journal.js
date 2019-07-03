// I was having a lot of trouble with this part of eslint so I decided to disable it on this file for now.
// TODO: Refactor variables to have destructuring assignment
/* eslint-disable react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
import axios from 'axios';

import CHeader from './CHeader';
import * as S from './Journal.style';
import AddEntry from './Journal-AddEntry';
import Goal from './JournalGoal';
import { MyContext } from './Context';
import { GETGOALS_SERVER } from '../constants';
import Bubble from './CLoading';

class Journal extends Component {
  state = {
    showEntry: true,
    showPlane: true,
    showHistory: true,
  };

  // queries database to retrieve all goals for current user on page load
  componentDidMount() {
    const { _id } = this.context.state;
    axios
      .post(GETGOALS_SERVER, { _id })
      .then(goalsData => {
        this.context.updateGoals(goalsData.data.data.goals);
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
      return <Goal data={goalData} key={key} />;
    });
  };

  handleEntery = () => {
    this.setState({ showEntry: !this.state.showEntry });
  };

  handleActionPlane = () => {
    this.setState({ showPlane: !this.state.showPlane });
  };

  handleHistory = () => {
    this.setState({ showHistory: !this.state.showHistory });
  };

  render() {
    const { showEntry, showPlane, showHistory } = this.state;
    // separates all goal data into 'toDos' and 'completed' for easy rendering
    const toDo = [];
    const completed = [];
    const allGoals = this.context.state.goalData;
    if (allGoals) {
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
        <CHeader menu />
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
          <S.H2>
            Add an entry: <S.ArrowDown onClick={this.handleEntery} />
          </S.H2>
          {showEntry && <AddEntry />}
        </S.Section>
        {this.context.state.goalData.length === 0 ? (
          <S.EmptyContainer><Bubble /></S.EmptyContainer>
        ) : (
          <>
            <S.Section>
              <S.H2>
                Action Plan:
                <S.ArrowDown onClick={this.handleActionPlane} />
              </S.H2>
              <S.P>
                As you complete your goals, check them off and watch your
                business grow!
              </S.P>
              {showPlane && this.renderGoals(toDo)}
            </S.Section>

            <S.Section>
              <S.H2>
                My Business History:{' '}
                <S.ArrowDown onClick={this.handleHistory} />
              </S.H2>
              {showHistory && this.renderGoals(completed)}
            </S.Section>
          </>
        )}
      </Fragment>
    );
  }
}
// allows us to access context within the component
Journal.contextType = MyContext;

export default Journal;
