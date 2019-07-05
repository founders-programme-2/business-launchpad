import styled from 'styled-components';

export const H1 = styled.h1`
  background-color: var(--highlight);
  font-size: 2.5rem;
  margin-right: 1rem;
`;

export const H2 = styled.h2`
  font-weight: 900;
  letter-spacing: 8%;
  font-size: 1.6rem;
  text-transform: uppercase;
  background-color: var(--highlight);
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ArrowDown = styled.button`
  width: 0;
  height: 0;
  outline: none;
  background-color: transparent;
  padding: 0;
  border-left: 0.7rem solid transparent;
  border-right: 0.7rem solid transparent;
  border-top: 1rem solid var(--black);
  border-bottom: none;
  :hover {
    cursor: pointer;
  }
`;

export const Section = styled.section`
  margin: 1rem 0 0.5rem 0;
  &:first-of-type {
    margin-top: 2rem;
  }
`;
