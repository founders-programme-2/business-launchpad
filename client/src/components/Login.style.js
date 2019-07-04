import styled from 'styled-components';

export const Main = styled.main`
  background-color: var(--highlight);
  min-height: 90vh;
  display: flex;
  align-items: center;
  flex-flow: column wrap;
`;

export const H1 = styled.h1`
  font-style: var(--black);
  background-color: var(--white);
  margin: 5rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  text-align: left;
  color: var(--black);
  font-family: 'Work Sans', sans-serif;
  font-weight: 900;
`;

export const Input = styled.input`
  display: block;
  background: var(--white);
  border-radius: 1rem;
  margin-bottom: 1rem;
  width: 13rem;
  padding: 1rem 0rem;
`;

export const P = styled.p`
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 0.8rem;
  text-decoration-line: underline;
  margin: 5rem;
`;
