import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  align-items: center;
  justify-content: center;
`;

export const H1 = styled.h1`
  font-weight: 900;
  font-size: 3rem;
  background-color: var(--highlight);
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
  width: 8rem;
  margin-bottom: 6%;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 900;
  line-height: 1remx;
  text-align: center;
  letter-spacing: 0.1em;
  text-decoration-line: underline;
  text-transform: uppercase;
`;
export const Address = styled.address`
  background: var(--white);
  border: 0.2rem solid var(--black);
  box-sizing: border-box;
  width: 18rem;
  justify-content: center;
  min-height: 55vh;
`;

export const P = styled.p`
  width: 80%;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: 0.1em;
  margin-left: 10%;
`;
