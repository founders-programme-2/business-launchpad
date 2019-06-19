import React, { Fragment } from 'react';
import * as S from './Dashboard-ProgressGoal.style';
import * as C from './Journal.style';

const GoalProgress = () => {
return(
  <Fragment>
  <h2>Your progress:</h2>
  <C.P>This timeline shows your current action plan as well as your journey to get here. Add and log your goals, mentor notes and reflections in your
<S.SP>action plan journal.</S.SP></C.P>
<S.GoalContainer>

<S.GoalSection>
<S.GoalLine>
<S.GoalTopCircle/>
<S.GoalBottomCircle/>
</S.GoalLine>
<div> //text-align: right;
  <h2> Salwa M. Mughessib</h2>
  <p> FullStack JavaScript Web Developer</p>
</div>
</S.GoalSection>

</S.GoalContainer>

</Fragment>
);
};
export default GoalProgress;
