import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  height: 100vh;
  align-items: center;
  flex-flow: column wrap;
  justify-content: center;
`;

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 3rem;
  background-color: var(--highlight);
  margin-top: 5%;
`;

export const P = styled.p`
  font-style: var(--black);
  width: 20%;
  font-family: Roboto;
  margin-top: 2%;
  padding: 2%;
`;
