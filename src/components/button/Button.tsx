import { iButton } from "./types";
import { StyledButton } from "./styles";

export const Button = ({ buttonType, onClick, type, children }: iButton) => {
  return (
    <StyledButton onClick={onClick} buttonType={buttonType} type={type}>
      {children}
    </StyledButton>
  );
};
