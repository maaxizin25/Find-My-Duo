import { Dialog, DialogOverlay } from "@reach/dialog";
import styled from "styled-components";

export const StyledModal = styled(Dialog)`
  max-width: 400px;
  width: calc(100vw - 2rem);
  margin: 0 auto;
  background-color: var(--gray6);
  padding: 18px;
  position: fixed;
  z-index: 4;
  border-radius: var(--radius2);
  top: 13%;
  /* transform: translateY(50%); */

  & > button {
    position: absolute;
    right: 20px;
    top: 10px;
    background-color: transparent;
    color: var(--fixed-white);
    border: none;
    font-size: var(--font4);
    color: var(--gray1);
  }

  button {
    height: 50px;
  }

  & > h1 {
    font-weight: 600;
    font-size: var(--font2);
    color: var(--fixed-white);
    margin-bottom: 20px;
    color: var(--gray1);
  }
`;

export const StyledOverlayModal = styled(DialogOverlay)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
