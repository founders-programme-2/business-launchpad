import styled from 'styled-components';

export const Main = styled.main`
  background-color: var(--highlight);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
`;

export const H1 = styled.h1`
  position: absolute;
  width: 146px;
  height: 60px;
  left: 500px;
  top: 270px;
  font-family: Permanent Marker;
  font-weight: bold;
  font-size: 5rem;
  transform: rotate(-7deg);
`;
export const H2 = styled.h1`
  font-style: var(--black);
  background-color: var(--white);
  margin: 50px;
`;
export const Button = styled.button`
  position: absolute;
  width: 243px;
  height: 46px;
  left: 510px;
  top: 500px;
  background: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-right: 40px;
  margin-top: 20px;
  font-weight: bold;
  font-size: 1.5rem;
  letter-spacing: 0.08em;
  &:hover {
    background-color: var(--black);
    color: var(--white);
  }
`;
export const Button1 = styled.button`
  position: absolute;
  width: 243px;
  height: 46px;
  left: 430px;
  top: 500px;
  background: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-top: 20px;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 80px;
  letter-spacing: 0.08em;
  &:hover {
    background-color: var(--black);
    color: var(--white);
  }
`;
