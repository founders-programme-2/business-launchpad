import styled from 'styled-components';

export const Article = styled.article`
  margin: 1rem;
  padding: 1rem 0.5rem;
  /* Ignores first child element */
  &:nth-child(n + 3) {
    border-top: 0.1rem dashed var(--black);
  }
`;

// leaving these below for future styling

export const H3 = styled.h3``;

export const A = styled.a``;

export const P = styled.p``;
