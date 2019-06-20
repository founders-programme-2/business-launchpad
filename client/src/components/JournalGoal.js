import React, { Component,Fragment } from 'react';
import * as S from './JournalGoal.style';
import ReflectionForm from'./JournalReflectionForm'
class Goal extends Component {
state={
isChecked: false
};
handleChecked = ()=> {
this.setState({isChecked: !this.state.isChecked});
console.log(this.state.isChecked);
};

render(){
  const data  = this.props;
  console.log(data);
  return (
    <Fragment>
    {this.state.isChecked?(<ReflectionForm/>):(<S.Article>
      <S.HeaderSection>
        {data.checked ? (
          <input type="checkbox" defaultChecked />
        ) : (
          <input type="checkbox" onChange={ this.handleChecked } />
        )}
        <h3>{data.title}</h3>
        <S.Delete type="submit">X</S.Delete>
      </S.HeaderSection>

      <S.Info>
        <S.Inline>
          <S.H4>Category:</S.H4>
          <p>{data.category}</p>
        </S.Inline>

        <S.Inline>
          <S.H4>Date created:</S.H4>
          <p>{data.dateCreated}</p>
        </S.Inline>

        <S.Inline>
          <S.H4>Due date:</S.H4>
          <p>{data.date}</p>
        </S.Inline>

        {data.dateCompleted !== '' ? (
          <Fragment>
            <S.Inline>
              <S.H4>Date completed:</S.H4>
              <p>{data.dateCompleted}</p>
            </S.Inline>
          </Fragment>
        ) : null}
      </S.Info>

      <S.Body>
        <S.H4>Details:</S.H4>
        <p>{data.details}</p>
      </S.Body>
    </S.Article>)
  };
    </Fragment>
  );}

};

export default Goal;
