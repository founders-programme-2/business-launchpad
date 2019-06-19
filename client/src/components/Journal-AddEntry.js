import React, { Component, Fragment } from 'react';
import axios from 'axios';
import * as S from './Journal-AddEntry.style';

class AddEntry extends Component {
  state = {
    title: 'Test',
    category: 'Goal',
    date: '2019-06-29',
    details: 'Here are some test details for this test goal entry. Killing it!',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const dataToSend = this.state;
    // no actual backend yet, this is just a placeholder with console.logs for later testing
    axios
      .post('/account/goal', dataToSend)
      // eslint-disable-next-line no-console
      .then(response => console.log(response))
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

export default AddEntry;
