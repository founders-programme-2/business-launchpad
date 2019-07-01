import styled from 'styled-components';

export const Section = styled.section`
  border: 0.2rem solid var(--black);
  margin: 0.3rem 0 0.3rem 0;
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
`;

export const H2 = styled.h2`
  background-color: var(--highlight);
  padding: 1rem;
  font-size: 2.2rem;
  text-transform: uppercase;
  font-weight: 900;
`;

export const Label = styled.label`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  margin: 0.3rem;
`;

export const Input = styled.input`
  border: 0.2rem solid var(--gray);
  height: 1.2rem;
`;

export const Select = styled.select`
  border: 0.2rem solid var(--gray);
  height: 1.5rem;
  border-radius: 0;
`;

export const Textarea = styled.textarea`
  border: 0.2rem solid var(--gray);
`;

export const Submit = styled.input`
  background-color: var(--black);
  width: 8rem;
  color: var(--white);
  font-size: 1.2rem;
  border-radius: 1rem;
  box-shadow: 0.2rem 4rem 4rem rgba(0, 0, 0, 0.25);
`;
