import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
// import propTypes from 'prop-types';
import * as S from './JournalReflectionForm.style';
import * as C from './Journal-AddEntry.style';
import { MyContext } from './Context';
import { UPDGOAL_SERVER } from '../constants';


class ReflectionForm extends Component {
  state = {
    goalId: this.props.goalId,
    reflection:'',
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { _id } = this.context.state;
    const { goalId, reflection } = this.state;
    const dataToSend = {_id, goalId,reflection };
    console.log(dataToSend);
    axios
      .put(UPDGOAL_SERVER, dataToSend)
      .then(result => {
      if(result.data.success){
          Swal.fire({
          type: 'success',
          title: 'Your Goal was Updated',
          showConfirmButton: false,
          timer: 1500
        })
      //   const { history } = this.props;
      //   history.push('/journal');
      }

      })
      .catch(err => Swal.fire('Error at the request'));
  };

  render() {
    const { reflection} = this.state;
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
          <C.Submit type="submit" value="cancel" onClick={this.props.handelCancel}/>
          <C.Submit type="submit" value="save" onClick={this.handleSubmit} />
        </S.ButtonContainer>
      </S.Overlay>
    );
  }
}
ReflectionForm.contextType = MyContext;
// ReflectionForm.propTypes = {
//   history: propTypes.string.isRequired,
// };

export default ReflectionForm;
