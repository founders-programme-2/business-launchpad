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
  text-align: center;
  margin-bottom: 3%;
  margin-right: 13%;
`;
export const P = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 18px;
  letter-spacing: 0.1em;
  width: 30%;
  margin-bottom: 15%;
`;
