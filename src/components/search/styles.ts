import styled from "styled-components";

export const FormSearch = styled.div`
  width: 100%;
  max-width: 390px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  background: var(--gray4);
  border-radius: var(--radius1);

  button {
    height: 25px;
    background: transparent;
    border: none;
    color: var(--gray2);
  }

  input {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    padding: 0 0px 0 10px;
    color: lightgray;

    &::placeholder {
      font-weight: 400;
      font-size: var(--font5);
      line-height: 21px;
      color: var(--gray2);
    }
  }
`;

export const UserChat = styled.div`
  width: 100%;
  padding: 10px;
  background: var(--gray4);
  border-radius: var(--radius1);

  span {
    width: 100%;
    text-align: left;
    color: var(--gray1);
  }
`;
