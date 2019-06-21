import styled from 'styled-components';

export const Main = styled.main`
  background-color: var(--main-color);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
`;
export const Title = styled.title`
  position: absolute;
  width: 146px;
  height: 72px;
  font-family: Permanent Marker;
  font-style: normal;
  font-weight: normal;
  font-size: 70rem;
  line-height: 70px;
  letter-spacing: 0.1rem;
  background: var(--black);
  transform: rotate(-14.51deg);
`;

export const H1 = styled.h1`
  font-style: var(--black);
  background-color: var(--white);
  margin: 50px;
`;

export const Button = styled.button`
  width: 168px;
  height: 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background-color: var(--black);
  color: var(--login-color, white);
  font-weight: 700;
  padding: 0.1rem;
  font-size: 1.5rem;
  letter-spacing: 8%;
`;
