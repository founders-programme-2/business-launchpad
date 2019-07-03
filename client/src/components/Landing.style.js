import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: var(--highlight);
  min-height: 90vh;
`;

export const SectionTitle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 2rem auto;
`;

export const SectionButtons = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  padding-top: 10%;
  align-items: center;
`;

export const H1 = styled.h1`
  font-family: 'Permanent Marker';
  font-size: 4rem;
  transform: rotate(-7deg);
  margin-bottom: 0.2rem;
`;

export const H2 = styled.h2`
  font-style: var(--black);
  font-size: 2.6rem;
  background-color: var(--white);
  text-transform: uppercase;
  font-weight: 800;
  line-height: 2.4rem;
  display: inline-table;
`;

export const ButtonSignUp = styled.button`
  margin: 0.5rem;
  width: 15rem;
  height: 3rem;
  background: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3rem;
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: 0.08em;
  align-self: flex-end;
  &:hover {
    background-color: var(--black);
    color: var(--white);
  }
`;

export const ButtonLogin = styled(ButtonSignUp)`
  background: var(--black);
  color: var(--white);
  &:hover {
    background-color: var(--white);
    color: var(--black);
  }
`;
