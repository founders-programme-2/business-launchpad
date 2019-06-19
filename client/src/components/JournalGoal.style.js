import styled from 'styled-components';

export const Article = styled.article`
  border-top: 3px dashed var(--black);
  margin: 2rem 1rem 2rem 1rem;
`;

export const HeaderSection = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
`;

export const Delete = styled.button`
  font-size: 1.5rem;
  font-weight: 200;
`;

export const Info = styled.section`
  margin: 1rem;
`;

export const Body = styled.section`
  margin: 1rem;
`;

// to keep the h4 and corresponding information inline
export const Inline = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0.1rem;
`;

export const H4 = styled.h4`
  margin-right: 0.3rem;
`;
