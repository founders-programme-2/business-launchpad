import styled from 'styled-components';

export const Article = styled.article`
  border-top: 0.2rem dashed var(--black);
  margin: 2rem 1rem 2rem 1rem;
`;

export const HeaderSection = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
`;

export const Delete = styled.button`
  // font-size: 1.5rem;
  // font-weight: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: none;
  background-color: transparent;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

export const Info = styled.section`
  margin: 1rem;
`;

export const Body = styled.section`
  margin: 1rem;
`;

// to keep the h4 and corresponding information inline
export const Inline = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0.1rem;
`;

export const H4 = styled.h4`
  margin-right: 0.3rem;
`;
export const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: var(--white);
  border: 3px solid var(--black);
  :after {
    content: '';
    position: absolute;
    display: none;
  }
  :hover {
    background-color: var(--gray);
  }
`;
export const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 34px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
export const Checkbox = styled.input`
position: absolute;
opacity: 0;
cursor: pointer;
height: 0;
width: 0;
&:checked + ${Box} {
  background-color: var(--highlight);
   &:after {
     display: block;
     left: 9px;
     top: 5px;
     width: 5px;
     height: 10px;
     border: solid var(--black);
     border-width: 0 3px 3px 0;
     -webkit-transform: rotate(45deg);
     -ms-transform: rotate(45deg);
     transform: rotate(45deg);
   }

`;
