import styled from "styled-components";
export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  background: var(--gray5);
  border-bottom: 1px solid gray;
  button {
    background: transparent;
    border: none;
    color: var(--gray2);
  }
`;
