import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
`;

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 3rem;
  background-color: var(--highlight);
  margin-bottom: 7%;
`;

export const P = styled.p`
  font-style: var(--black);
  background-color: var(--white);
  margin-bottom: 20%;
  width: 20%;
  font-family: Roboto;
`;
