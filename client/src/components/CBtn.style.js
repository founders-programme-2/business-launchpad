import styled from 'styled-components';

const Button = styled.button`
  width: 11rem;
  height: 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background-color: var(--black);
  color: var(--white);
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  padding: 0.1rem;
  font-size: 1rem;
  letter-spacing: 8%;
  outline: none;
  border: none;
  :hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export default Button;
