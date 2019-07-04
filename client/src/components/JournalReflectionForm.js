import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import * as S from './JournalReflectionForm.style';
import * as C from './Journal-AddEntry.style';
import { MyContext } from './Context';
import { UPDGOAL_SERVER, ERROR500_URL } from '../constants';

import '../styles/sweetalert2.css';

class ReflectionForm extends Component {
  state = {
    goalId: this.props.goalId,
    reflection: '',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { history } = this.props;
    const { _id } = this.context.state;
    const { goalId, reflection } = this.state;
    const dataToSend = { _id, goalId, reflection };
    console.log(dataToSend);
    axios
      .put(UPDGOAL_SERVER, dataToSend)
      .then(result => {
        if (result.data.success) {
          Swal.fire({
            type: 'success',
            title: '<h3>Your Goal was Completed</h3>',
            showConfirmButton: false,
            timer: 2000,
            background: 'var(--white)',
          }).then(() => {
            this.context.updateGoals(result.data.data.goals);
          });
        }
      })
      .catch(err => {
        console.log('err catch', err);
        history.push({
          pathname: ERROR500_URL,
        });
      });
  };

  render() {
    const { history } = this.props;
    const { reflection } = this.state;
    return (
      <S.Overlay>
        <S.H3>
          Good job on
          <br />
          completing your goal!
          <br />
          What went well?
          <br />
          What went poorly?
        </S.H3>
        <S.TextArea
          rows="10"
          cols="20"
          name="reflection"
          placeholder="Your reflections..."
          required
          value={reflection}
          onChange={this.handleChange}
        />
        <S.ButtonContainer>
          <C.Submit
            type="submit"
            value="cancel"
            onClick={this.props.handelCancel}
          />
          <C.Submit type="submit" value="save" onClick={this.handleSubmit} />
        </S.ButtonContainer>
      </S.Overlay>
    );
  }
}
ReflectionForm.contextType = MyContext;

ReflectionForm.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(ReflectionForm);
