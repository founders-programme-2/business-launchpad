import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 6rem;
  margin: 1rem;
`;
export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Line = styled.div`
  display: block;
  margin: 0 auto;
  width: 100%;
  border: 0.12rem solid var(--black);
  border-radius: 1rem;
  margin-top: 0.9rem;
`;
export const H3 = styled.h3`
  font-weight: bold;
  font-size: 1rem;
  color: black
  float: right;

`;
