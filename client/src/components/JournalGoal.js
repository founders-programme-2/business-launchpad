import React, { Fragment } from 'react';
import * as S from './JournalGoal.style';

const Goal = data => {
  return (
    <S.Article>
      {data.checked ? (
        <input type="checkbox" checked />
      ) : (
        <input type="checkbox" />
      )}
      <button type="submit">X</button>
      <h3>Title</h3>
      <p>{data.title}</p>
      <h4>Category:</h4>
      <p>{data.category}</p>
      <h4>Date created:</h4>
      <p>{data.dateCreated}</p>
      <h4>Due date:</h4>
      <p>{data.date}</p>
      {data.dateCompleted !== '' ? (
        <Fragment>
          <h4>Date completed:</h4>
          <p>{data.dateCompleted}</p>
        </Fragment>
      ) : null}
      <h4>Details:</h4>
      <p>{data.details}</p>
    </S.Article>
  );
};

export default Goal;
