import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  background-color: var(--white);
  height: 80vh;
  align-items: center;
  flex-flow: column wrap;
  justify-content: center;
`;

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 3rem;
  background-color: var(--highlight);
`;

export const P = styled.p`
  font-style: var(--black);
  width: 100%;
  font-family: Roboto;
  padding: 2%;
  margin-left: 10%;
`;
