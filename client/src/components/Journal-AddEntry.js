import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import * as S from './Journal-AddEntry.style';
import { MyContext } from './Context';
import { ADDGOAL_SERVER } from '../constants';

class AddEntry extends Component {
  state = {
    title: '',
    category: 'Goal',
    date: '',
    details: '',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    // makes a variable from the information in the state and then adds _id from context
    const newEntryData = this.state;
    // eslint-disable-next-line
    newEntryData._id = this.context.state._id;

    event.preventDefault();
    const dataToSend = this.state;
    axios
      .post(ADDGOAL_SERVER, dataToSend)
      // eslint-disable-next-line no-console
      .then(({ data }) => {
        if (data.success) {
          Swal.fire({
            type: 'success',
            title: 'Success!',
            text: 'Goal added',
          });
          // receives updated list of goals and puts into context
          this.context.updateGoals(data.data.goals);
          this.setState({ title: '', category: 'Goal', date: '', details: '' });
        } else {
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: data.message,
          });
        }
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  };

  render() {
    const { title, category, date, details } = this.state;

    return (
      <Fragment>
        <S.Form>
          <S.Label>
            Title:
            <S.Input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            ></S.Input>
          </S.Label>
          <S.Label>
            Category:
            <S.Select
              name="category"
              value={category}
              onChange={this.handleChange}
            >
              <option>Goal</option>
              <option>Habit forming</option>
              <option>Habit breaking</option>
            </S.Select>
          </S.Label>
          <S.Label>
            Estimated date of completion:
            <S.Input
              type="date"
              name="date"
              value={date}
              onChange={this.handleChange}
            ></S.Input>
          </S.Label>
          <S.Label>
            Further details:
            <S.Textarea
              rows="10"
              cols="20"
              name="details"
              value={details}
              onChange={this.handleChange}
            ></S.Textarea>
          </S.Label>
          <S.Submit type="submit" value="save" onClick={this.handleSubmit} />
        </S.Form>
      </Fragment>
    );
  }
}

AddEntry.contextType = MyContext;

export default AddEntry;
