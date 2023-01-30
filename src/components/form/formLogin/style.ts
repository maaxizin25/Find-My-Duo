import styled from "styled-components";

export const FormStyle = styled.form`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  padding: 18px;
  z-index: 1;

  > h1 {
    font-size: var(--font1);
    color: var(--fixed-white);
    border-bottom: 5px solid var(--color-primary);
    width: max-content;
  }

  > span {
    font-size: 10px;
    color: red;
    font-weight: 400;
    height: 12px;
  }

  > button {
    margin-top: 15px;
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    margin-top: 22px;
    border-top: 2px solid var(--gray3);
    padding: 28px 0px;
    gap: 8px;

    > p {
      color: var(--gray2);
    }
    > a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--fixed-white);
      background-color: var(--gray5);

      width: 100%;
      height: 66px;

      font-size: 24px;
      font-weight: 700;
      font-family: "Inter";

      border: 2px ridge var(--color-primary);
      border-radius: var(--radius1);

      :hover {
        background-color: var(--color-primary);
        border-color: var(--gray5);
      }
    }
  }
`;
