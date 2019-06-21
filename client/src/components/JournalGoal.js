import React, { Fragment } from 'react';
import * as S from './JournalGoal.style';

const Goal = data => {
  return (
    <S.Article>
      <S.HeaderSection>
        {data.checked ? (
          <input type="checkbox" defaultChecked aria-label="Completed" />
        ) : (
          <input type="checkbox" aria-label="Completed" />
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
    </S.Article>
  );
};

export default Goal;
