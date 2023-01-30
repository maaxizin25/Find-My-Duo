import styled from "styled-components";

export const BoxInput = styled.div`
  display: flex;
  background-color: #1a1b1f;
  padding: 15px 25px;
  align-self: flex-end;
  width: 100%;
  > input {
    font-size: 18px;
    width: 80%;
    border: none;
    border-radius: 16px;
    padding: 15px;
    background-color: #21232b;
    color: #6b6c7a;
  }
  > button {
    width: 20%;
    background: transparent;
    border: none;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    font-size: 25px;
    color: var(--gray1);
  }
`;