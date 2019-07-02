import styled from 'styled-components';

export const SP = styled.p`
  font-style: normal;
  background-color: var(--highlight);
  text-decoration: underline;
  display: inline-block;
`;
export const GoalSection = styled.section`
padding 3rem;
position:relative;
`;
export const Info = styled.div`
  position: absolute;
  text-align: right;
  top: 58px;
  right: 10px;
  width: 15rem;
`;
export const Info2 = styled.div`
  position: absolute;
  text-align: right;
  top: 204px;
  right: 10px;
  width: 15rem;
`;
export const Info3 = styled.div`
  position: absolute;
  text-align: right;
  top: 353px;
  right: 10px;
  width: 15rem;
`;
export const Info4 = styled.div`
  position: absolute;
  text-align: right;
  top: 502px;
  right: 10px;
  width: 15rem;
`;

export const GoalLine = styled.div`
  background: var(--highlight);
  min-width: 30px;
  max-width: 30px;
  min-height: 190px;
  position: relative;
  border-radius: 13px;
  transform: rotate(-20deg);
  display: block;
`;
export const GoalLine2 = styled.div`
  background: var(--highlight);
  min-width: 30px;
  max-width: 30px;
  min-height: 190px;
  position: absolute;
  border-radius: 13px;
  transform: rotate(20deg);
  display: block;
  top: 198px;
  left: 48px;
`;
export const GoalLine3 = styled.div`
  background: var(--highlight);
  min-width: 30px;
  max-width: 30px;
  min-height: 190px;
  position: absolute;
  border-radius: 13px;
  transform: rotate(-20deg);
  display: block;
  top: 347px;
  left: 48px;
`;
export const GoalTopCircle = styled.div`
  background: var(--black);
  min-width: 29px;
  min-height: 29px;
  position: absolute;
  border-radius: 50%;
  top: 0;
  border: 1px solid var(--white);
`;
export const GoalBottomCircle = styled.div`
  background: var(--black);
  min-width: 29px;
  min-height: 29px;
  border: 1px solid var(--white);
  position: absolute;
  border-radius: 50%;
  bottom: 0;
`;
