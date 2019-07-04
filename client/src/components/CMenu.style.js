import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonOpen = styled.button`
  border: none;
  background: none;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;
export const MenuLine = styled.div`
  margin-bottom: 0.4rem;
  background-color: var(--black);
  border-radius: 0.5rem;
  width: 2rem;
  height: 0.2rem;
`;
export const P = styled.p`
  font-weight: 900;
  font-size: 0.5rem;
  font-style: normal;
  letter-spacing: 10%;
  color: var(--black);
  letter-spacing: 0.2rem;
  font-family: 'Work Sans', sans-serif;
`;

export const ButtonClose = styled.button`
  width: 95%;
  height: 2rem;
  display: flex;
  flex-direction: column;
  border: none;
  background-color: var(--highlight);
  outline: none;
`;

export const CloseX = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  margin-bottom: 0.5rem;
  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
  :after {
    position: absolute;
    left: 6rem;
    top: 3rem;
    content: ' ';
    height: 1.5rem;
    width: 0.4rem;
    background-color: var(--black);
    transform: rotate(45deg);
    border-radius: 3rem;
  }
  :before {
    position: absolute;
    left: 6rem;
    top: 3rem;
    content: ' ';
    height: 1.5rem;
    width: 0.4rem;
    background-color: var(--black);
    transform: rotate(-45deg);
    border-radius: 3rem;
  }
`;

export const PClose = styled(P)`
  position: absolute;
  left: 5.1rem;
  top: 4.1rem;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: var(--highlight);
`;
export const MenuElement = styled.button`
  background-color: var(--white);
  border: none;
  padding: 0.5rem;
  text-align: center;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  :hover {
    background-color: var(--black);
  }
`;
export const LinkText = styled(Link)`
  font-family: 'Work Sans', sans-serif;
  color: var(--black);
  font-size: 1.5rem;
  letter-spacing: 10%;
  text-decoration: none;
  font-weight: 900;
  :hover {
    color: var(--white);
  }
`;

export const Overlay = styled.main`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: -14px;
  left: 0;
  z-index: 1000;
  margin: 0 auto;
`;
