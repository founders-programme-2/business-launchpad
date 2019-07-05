import styled, { css } from 'styled-components';

export const Header = styled.header`
  background-color: var(--highlight);
  display: flex;
  flex-direction: column;
  height: 6rem;

  ${props =>
    props.menu &&
    css`
      background: none;
    `};
`;
export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-top: 0.9rem;
  box-sizing: border-box;
  position: relative;
`;
export const Logo = styled.img`
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
  ${props =>
    props.primary &&
    css`
      width: 3rem;
      height: 3rem;
    `};
`;

export const Line = styled.div`
  display: block;
  margin: 0 auto;
  width: 90%;
  border: 0.12rem solid var(--black);
  background-color: var(--black);
  border-radius: 1rem;
  margin-top: 0.9rem;
`;
