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
        <S.Section>
          <S.H2>Add an entry:</S.H2>
          <S.Form>
            <S.Label>
              Title:
              <S.Input type="text"></S.Input>
            </S.Label>
            <S.Label>
              Category:
              <S.Select>
                <option>Test</option>
                <option>Test2</option>
              </S.Select>
            </S.Label>
            <S.Label>
              Estimated date of completion:
              <S.Input type="date"></S.Input>
            </S.Label>
            <S.Label>
              Further details:
              <S.Textarea rows="10" cols="20"></S.Textarea>
            </S.Label>
            <S.Submit type="submit" value="save" />
          </S.Form>
        </S.Section>
      </Fragment>
    );
  }
}

export default AddEntry;
