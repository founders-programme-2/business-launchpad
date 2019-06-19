import styled from 'styled-components';

export const ButtonOpen = styled.button`
  border: none;
  background-color: var(--highlight);
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
  height: 5px;
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
export const CloseContainer = styled.div`
  width: 95%;
  height: 4rem;
`;
export const Close = styled.div`
    position: absolute;
    top: 5rem;
    width: 32px;
    height: 32px;
    margin-left: 1rem;
  }
  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
  :after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 0.4rem;
    background-color: var(--black);
    transform: rotate(45deg);
    border-radius: 3rem;
  }

  :before {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 0.4rem;
    background-color: var(--black);
    transform: rotate(-45deg);
    border-radius: 3rem;
  }
`;
export const CloseText = styled.h4`
  font-weight: 700;
  font-size: 8px;
  color: var(--black);
  letter-spacing: 0.2rem;
  position: absolute;
  top: 7rem;
  margin-left: 1rem;
  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
export const MenuWrapper = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 600px;
  background-color: var(--highlight);
`;
export const MenuElement = styled.button`
  background-color: var(--white);
  border: none;
  color: var(--black);
  padding: 0.5rem;
  text-align: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  // display: inline-flex;
  cursor: pointer;
`;
export const MenuText = styled.h2`
  font-size: 1.5rem;
  a {
    text-decoration: none;
    color: var(--black);
    font-weight: 700;
  }
`;
// //////////////////////////
// the overlay for the menu
export const Overlay = styled.main`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: -14px;
  left: 0;
  z-index: 1000;
  margin: 0 auto;
`;
