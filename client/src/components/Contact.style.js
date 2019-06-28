import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  align-items: center;
  flex-flow: column wrap;
  justify-content: center;
`;

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 3rem;
  background-color: var(--highlight);
  margin-bottom: 3%;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 900;
`;
export const H2 = styled.h2`
  font-size: 1rem;
  color: var(--black);
  margin-left: 29%;
  margin-top: 3%;
  background: var(--highlight);
  width: 113px;
  margin-bottom: 6%;
  font-family: 'Work Sans', sans serif;
  font-style: normal;
  font-weight: 900;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.1em;
  text-decoration-line: underline;
`;
export const Address = styled.div`
  background: var(--white);
  border: 3px solid var(--black);
  box-sizing: border-box;
  width: 287px;
  height: 220px;
  justify-content: center;
`;

export const P = styled.p`
  width: 80%;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 18px;
  letter-spacing: 0.1em;
  margin-left: 10%;
`;
