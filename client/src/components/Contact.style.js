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
  margin-bottom: 3%;
`;
export const H3 = styled.h3`
  font-weight: bold;
  font-size: 1rem;
  color: var(--black);
  margin-left: 29%;
  margin-top: 3%;
  background: var(--highlight);
  width: 113px;
  margin-bottom: 6%;
`;
export const ContactWrapper = styled.div`
  background: #ffffff;
  border: 3px solid #000000;
  box-sizing: border-box;
  width: 287px;
  height: 220px;
  justify-content: center;
`;

export const P = styled.p`
  width: 80%;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 18px;
  letter-spacing: 0.1em;
  margin-left: 10%;
`;
