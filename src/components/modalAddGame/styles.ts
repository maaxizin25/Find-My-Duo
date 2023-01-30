import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;

  p {
    margin-bottom: -20px;
    margin-right: auto;
    color: var(--gray1);
  }
  button {
    margin-top: 16px;
  }

  & > span {
    font-size: var(--font6);
    color: var(--gray1);
    margin-top: -26px;
  }
`;
