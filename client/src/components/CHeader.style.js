import styled ,{ css } from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.img`
  width:5rem;
  height: 5rem;
  margin: 2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
  ${props =>
   props.primary &&
   css`
      width: 2.5rem;
      height: 2.5rem;
   `};
`;

export const Line = styled.div`

  display: block;
  margin: 0 auto;
  width:80%;
  border: 0.11rem solid var(--black);
  background-color:var(--black);
  border-radius: 1rem;
`;
