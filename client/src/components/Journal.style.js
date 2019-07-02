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
  display:flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
`;

export const Section = styled.section`
  border: 3px solid var(--black);
  margin: 0.5rem 0 0.5rem 0;
`;

export const P = styled.p`
  font-style: normal;
  margin: 1.5rem;
`;
export const ArrowDown =styled.div`
width: 0;
 height: 0;
 border-left: 20px solid transparent;
 border-right: 20px solid transparent;

 border-top: 20px solid #f00;
`;
