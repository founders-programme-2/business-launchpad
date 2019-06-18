import styled from 'styled-components';

export const Main = styled.div`
  background-color: var(--main-color, #f9d52f);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
`;

export const Title = styled.h1`
  font-family: Work Sans;
  font-style: var(--title-color, black);
  font-size: 38pt;
  background-color: var(--title-color, white);
  margin: 50px;
`;
export const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
`;
export const Container = styled.div``;
export const Label = styled.label`
  font-size: 18pt;
  text-align: center;
  color: var(--label-color, black);
  font-weight: bold;
  font-family: Work Sans;
`;

export const Input = styled.input`
  display: block;
  background-color: var(--input-color, #ffffff);
  border-radius: 10px;
  margin-bottom: 30px;
  width: 200px;
  padding: 10px 0px;
`;
export const Bottom = styled.div``;

export const LoginButton = styled.button`
  width: 168px;
  height: 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background-color: var(--login-color, #1d1a1ae0);
  font-family: Work Sans;
  font-style: normal;
  font-weight: 900;
  font-size: 20pt;
  line-height: 23px;
  letter-spacing: 0.08em;
  color: white;
`;
