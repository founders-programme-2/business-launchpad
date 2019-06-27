import React, { Fragment } from 'react';
import * as S from './Dashboard-ProgressGoal.style';

const GoalProgress = () => {
  return (
    <Fragment>
      <S.GoalSection>
        <S.Info>
          <h3>CURRENT GOAL</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
        </S.Info>
        <S.GoalLine>
          <S.GoalTopCircle />
          <S.GoalBottomCircle />
        </S.GoalLine>

        <S.GoalLine2>
          <S.GoalTopCircle />
          <S.GoalBottomCircle />
        </S.GoalLine2>
        <S.Info2>
          <h3>JUNE 5, 2019</h3>
          <p>Completed registration with Business Launchpad</p>
        </S.Info2>

        <S.Info3>
          <h3>JUNE 2, 2019</h3>
          <p>Completed intial assessment</p>
        </S.Info3>

        <S.Info4>
          <h3>JUNE 1, 2019</h3>
          <p>Signed up to Business Launchpad</p>
        </S.Info4>

        <S.GoalLine3>
          <S.GoalTopCircle />
          <S.GoalBottomCircle />
        </S.GoalLine3>
      </S.GoalSection>
    </Fragment>
  );
};
export default GoalProgress;
