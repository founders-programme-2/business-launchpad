import React from 'react';
import * as S from './JournalGoal.style';

const Plan = () => {
  return (
    <S.Article>
      <input type="checkbox" />
      <button type="submit">X</button>
      <h3>Title</h3>
      <h4>Category:</h4>
      <p>Category</p>
      <h4>Date created:</h4>
      <p>Date created</p>
      <h4>Due date:</h4>
      <p>Due date</p>
      <h4>Details:</h4>
      <p>Details</p>
    </S.Article>
  );
};

export default Plan;
