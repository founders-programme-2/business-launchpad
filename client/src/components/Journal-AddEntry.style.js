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
  border: 1px solid var(--black);
  height: 1.6rem;
  margin-bottom: 1rem;
  outline: none;
  :focus {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const Select = styled.select`
  border: 1px solid var(--black);
  height: 1.8rem;
  border-radius: 0;
  background-color: var(--white);
  margin-bottom: 1rem;
  outline: none;
  :focus {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const Textarea = styled.textarea`
  border: 1px solid var(--black);
  outline: none;
  :focus {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const Submit = styled.input`
  background-color: var(--black);
  // width: 8rem;
  padding: 0.3rem 3.5rem;
  color: var(--white);
  font-size: 1.2rem;
  border-radius: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  outline: none;
  border: none;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
