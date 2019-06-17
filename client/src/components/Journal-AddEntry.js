import React, { Component, Fragment } from 'react';
import * as S from './Journal-AddEntry.style';

class AddEntry extends Component {
  state = {
    title: '',
    category: '',
    date: '',
    details: '',
  };

  render() {
    return (
      <Fragment>
        <S.Form>
          <S.H2>Add an entry</S.H2>
          <S.Label>
            Title:
            <S.Input type="text"></S.Input>
          </S.Label>
          <S.Label>
            Category:
            <S.Input type="select"></S.Input>
          </S.Label>
          <S.Label>
            Estimated date of completion:
            <S.Input type="date"></S.Input>
          </S.Label>
          <S.Label>
            Further details:
            <S.Textarea></S.Textarea>
          </S.Label>
          <S.Submit type="submit" />
        </S.Form>
      </Fragment>
    );
  }
}

export default AddEntry;
