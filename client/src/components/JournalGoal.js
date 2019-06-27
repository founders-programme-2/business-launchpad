// having issues with these rules so I'm disabling for the moment:
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-underscore-dangle */

import React, { Component, Fragment } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { DELGOAL_SERVER } from '../constants';
import * as S from './JournalGoal.style';
import ReflectionForm from './JournalReflectionForm';
import { MyContext } from './Context';

class Goal extends Component {
  state = {
    goalId: this.props.data._id,
    isChecked: false,
  };

  deleteGoal = () => {
    const { _id } = this.context.state;
    const { goalId } = this.state;
    const dataToSend = { _id, goalId };
    axios
      .post(DELGOAL_SERVER, dataToSend)
      .then(goalsData => {
        this.context.updateGoals(goalsData.data.data.goals);
      })
      .catch(err => err);
  };

  handleChecked = () => {
    this.setState({ isChecked: !this.state.isChecked });
    console.log(this.state.isChecked);
  };

  render() {
    const { data } = this.props;
    const {
      title,
      category,
      completed,
      dateCreated,
      details,
      _id,
      dateToDo,
      dateCompleted,
    } = data;

    return (
      <Fragment>
        {this.state.isChecked ? (
          <ReflectionForm
            handelCancel={this.handleChecked}
            goalId={this.state.goalId}
          />
        ) : (
          <S.Article>
            <S.HeaderSection>
              {completed ? (
                <input type="checkbox" defaultChecked aria-label="Completed" />
              ) : (
                <input
                  type="checkbox"
                  aria-label="onGoing"
                  onChange={this.handleChecked}
                />
              )}
              <h3>{title}</h3>
              <S.Delete type="submit" name={_id} onClick={this.deleteGoal}>
                X
              </S.Delete>
            </S.HeaderSection>
            <S.Info>
              <S.Inline>
                <S.H4>Category:</S.H4>
                <p>{category}</p>
              </S.Inline>

              <S.Inline>
                <S.H4>Date created:</S.H4>
                <p>{dateCreated}</p>
              </S.Inline>

              <S.Inline>
                <S.H4>Due date:</S.H4>
                <p>{dateToDo}</p>
              </S.Inline>

              {dateCompleted !== '' ? (
                <Fragment>
                  <S.Inline>
                    <S.H4>Date completed:</S.H4>
                    <p>{dateCompleted}</p>
                  </S.Inline>
                </Fragment>
              ) : null}
            </S.Info>

            <S.Body>
              <S.H4>Details:</S.H4>
              <p>{details}</p>
            </S.Body>
          </S.Article>
        )}
      </Fragment>
    );
  }
}
Goal.contextType = MyContext;

// defines what the props should look like
Goal.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    completed: PropTypes.bool,
    dateCreated: PropTypes.string,
    details: PropTypes.string,
    _id: PropTypes.string,
    dateToDo: PropTypes.string,
    dateCompleted: PropTypes.string,
  }).isRequired,
};
export default Goal;
