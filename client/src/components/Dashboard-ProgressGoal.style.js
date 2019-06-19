import styled from 'styled-components';

export const SP = styled.p`
font-style: normal;
background-color: var(--highlight);
text-decoration: underline;
display: inline-block;
`;
export const GoalContainer= styled.section`
display: flex;
flex-direction: column;
justify-content: center;
margin: 1rem;
`;
export const GoalSection = styled.div`
padding:1rem;
display: grid;
 grid-template-columns: 10% 70%;
 grid-column-gap: 1rem;
 `;
export const GoalLine = styled.div`
display:inline-block;
background: #f7bf36;
  min-width:25px;
  max-width:25px;
  min-height:200px;
  position: relative;
  border-radius:10px;
  transform: rotate(-20deg);

`;
export const GoalTopCircle = styled.div`
background: #000;
min-width:100%;
min-height:20px;
position: absolute;
border-radius:50%;
top:0;
`;
export const GoalBottomCircle = styled.div`
background: #000;
min-width:100%;
min-height:20px;
position: absolute;
border-radius:50%;
bottom:0;
`;
