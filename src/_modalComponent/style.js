import styled from 'styled-components';
import 'animate.css';

export const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalDialog = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20rem;
  max-width: 95vw;
  max-height: 95vh;
  border-radius: 0.3rem;

  background-color: #ffff;
  animation: fadeInDown;
  animation-duration: 1s;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 0.1rem solid #dee2e6;

  h5 {
    font-family: 'Poppins';
    font-style: normal;
    color: #25282b;
    font-weight: 500;
    font-size: 1.5rem;
    text-align: center;
    margin: 0;
  }

  span {
    font-size: 1.5rem;
    color: #dee2e6;
    font-weight: 700;
    line-height: 1;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      color: #5a6268;
      transition: 0.5s;
    }
  }
`;

export const ModalContent = styled.div`
  display: flex;
  width: 100%;
  max-height: 100%;
  box-sizing: border-box;
  padding: 1rem;

  overflow-x: hidden;
  overflow-y: auto;
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 0.1rem solid #dee2e6;

  button {
    font-size: 1rem;
    font-family: 'Noto Sans', arial, sans-serif;
    line-height: 1.6;
    color: #fff;
    background-color: #6c757d;
    padding: 0.4rem;
    border-radius: 0.18rem;
    box-shadow: none;
    border: none;
    transition: 0.5;

    &:hover {
      color: #fff;
      background-color: #5a6268;
      border-color: #545b62;
      transition: 0.5;
    }
  }
`;
