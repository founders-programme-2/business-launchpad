import styled from 'styled-components';

export const Overlay = styled.main`
  position: fixed;
  background-color: var(--highlight);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1000;
  margin: 0 auto;
  overflow: hidden;
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const H3 = styled.h3`
  text-transform: capitalize;
  text-align: center;
`;
export const TextArea = styled.textarea`
  border: 0.2rem solid var(--black);
  border-radius: 0.5rem;
  padding: 0.3rem;
  outline: none;
  width: 70%;
  height: 20rem;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 70%;
`;
