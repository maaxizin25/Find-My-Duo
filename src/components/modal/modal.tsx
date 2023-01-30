import { StyledModal, StyledOverlayModal } from "./style";
import { iModal } from "./types";

export const Modal = ({ title, setState, state, children }: iModal) => {
  return (
    <StyledOverlayModal isOpen={state} onDismiss={() => setState(!state)}>
      <StyledModal>
        <h1>{title}</h1>
        <button onClick={() => setState(!state)}>X</button>
        {children}
      </StyledModal>
    </StyledOverlayModal>
  );
};
