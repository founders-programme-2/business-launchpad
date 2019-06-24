import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: var(--highlight);
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
`;

export const H1 = styled.h1`
  width: 146px;
  height: 60px;
  font-family: Permanent Marker;
  font-weight: bold;
  font-size: 5rem;
  transform: rotate(-7deg);
`;
export const H2 = styled.h2`
  font-style: var(--black);
  background-color: var(--white);
  margin: 30px;
`;
export const Button = styled.button`
  width: 243px;
  height: 46px;
  backgound: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  font-weight: bold;
  font-size: 1.5rem;
  letter-spacing: 0.08em;
  &:hover {
    background-color: var(--black);
    color: var(--white);
  }
  margin: 20px;
`;
export const Button1 = styled.button`
  width: 243px;
  height: 46px;
  background: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  font-weight: bold;
  font-size: 1.5rem;
  letter-spacing: 0.08em;
  &:hover {
    background-color: var(--black);
    color: var(--white);
  }
`;
