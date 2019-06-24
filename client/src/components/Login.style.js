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
  font-style: var(--black);
  background-color: var(--white);
  margin: 50px;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  text-align: left;
  color: var(--black);
  font-family: 'Work Sans', sans-serif;
  font-weight: 900;
`;

export const Input = styled.input`
  display: block;
  background: var(--white);
  border-radius: 10px;
  margin-bottom: 30px;
  width: 200px;
  padding: 10px 0px;
`;

export const P = styled.p`
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 0.8rem;
  text-decoration-line: underline;
  margin: 50px;
`;
