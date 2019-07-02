import styled, { css } from 'styled-components';

export const FormWrapper = styled.section`
  border-top: 3px solid var(--black);
  border-bottom: 3px solid var(--black);
  box-sizing: border-box;
  margin-top: 1.5rem;
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  ${props =>
    props.border &&
    css`
      border-bottom: 3px dashed var(--black);
    `};
`;
export const Button = styled.a`
  padding: 0.5rem 1rem;
  background-color: var(--highlight);
  cursor: pointer;
  font-weight: 600;
`;
