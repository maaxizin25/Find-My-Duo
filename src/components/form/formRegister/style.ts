import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  padding: 18px;
  z-index: 1;

  > span {
    font-size: 12px;
    color: red;
    font-weight: 400;
    height: 12px;
  }

  > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;

    > a {
      font-size: var(--font6);
      color: var(--fixed-white);
      border-bottom: 1px solid;
    }

    > h1 {
      font-size: var(--font1);
      color: var(--fixed-white);
      border-bottom: 5px solid var(--color-primary);
    }
  }

  button {
    margin-top: 15px;
  }
`;
