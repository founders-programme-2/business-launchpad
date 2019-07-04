// having issues with these rules so I'm disabling for the moment:
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-underscore-dangle */

import React, { Component, Fragment } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Swal from 'sweetalert2';
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
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      })
      .catch(err => err);
  };

  handleChecked = () => {
    this.setState({ isChecked: !this.state.isChecked });
    console.log(this.state.isChecked);
  };

  confirmDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.value) {
        this.deleteGoal();
      }
    });
  };

  convertToReadableDate = dateToConvert => {
    const longDate = new Date(dateToConvert);
    // console.log(longDate.getDay(),longDate.getFullYear(),longDate.getMonth(),longDate.getDate());
    const strDate=longDate.toString();
    return strDate.slice(0,16)
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
      dateTodo,
      dateCompleted,
      reflection,
    } = data;

    console.log(data);
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
                <S.Label>
                  <S.Checkbox
                    type="checkbox"
                    defaultChecked
                    aria-label="Completed"
                  />
                  <S.Box />
                </S.Label>
              ) : (
                <S.Label>
                  <S.Checkbox
                    type="checkbox"
                    aria-label="onGoing"
                    onChange={this.handleChecked}
                  />
                  <S.Box />
                </S.Label>
              )}
              <h3>{title}</h3>
              <S.Delete type="submit" name={_id} onClick={this.confirmDelete}>
                <h3>X</h3>
                <h4> delete</h4>
              </S.Delete>
            </S.HeaderSection>
            <S.Info>
              <S.Inline>
                <S.H4>Category:</S.H4>
                <p>{category}</p>
              </S.Inline>

              <S.Inline>
                <S.H4>Date created:</S.H4>
                <p>{this.convertToReadableDate(dateCreated)}</p>
              </S.Inline>

              <S.Inline>
                <S.H4>Due date:</S.H4>
                <p>{this.convertToReadableDate(dateTodo)}</p>
              </S.Inline>

              {completed && (
                <S.Inline>
                  <S.H4>Date completed:</S.H4>
                  <p>{this.convertToReadableDate(dateCompleted)}</p>
                </S.Inline>
              )}
            </S.Info>

            <S.Body>
              <S.H4>Details:</S.H4>
              <p>{details}</p>
            </S.Body>

            {completed && (
              <S.Body>
                <S.H4>Reflection:</S.H4>
                <p>{reflection}</p>
              </S.Body>
            )}
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
    reflection: PropTypes.string,
    category: PropTypes.string,
    completed: PropTypes.bool,
    dateCreated: PropTypes.string,
    details: PropTypes.string,
    _id: PropTypes.string,
    dateTodo: PropTypes.string,
    dateCompleted: PropTypes.string,
  }).isRequired,
};
export default Goal;
