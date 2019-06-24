import styled from 'styled-components';

const Button = styled.button`
  width: 11rem;
  height: 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background-color: var(--black);
  color: var(--login-color, white);
  font-weight: 700;
  padding: 0.1rem;
  font-size: 1.5rem;
  letter-spacing: 8%;
`;

export default Button;
