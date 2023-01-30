import styled from "styled-components";

export const StyleLoginPage = styled.section`
  display: flex;
  flex-direction: column;
  background-color: var(--gray6);
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0;

  > header {
    > img {
      background: "../../assets/logoMoile.svg";
    }
  }
  > img {
    max-width: 250px;
    align-self: center;
    margin-bottom: 25px;
  }
  > footer {
    color: var(--fixed-white);
    align-self: center;
    max-width: 250px;
    font-size: var(--font6);
    line-height: 24px;
    margin-top: 22px;
  }
  > div {
    > img {
      display: none;
    }
    > div {
      display: none;
    }
  }
  form {
    align-self: center;
    max-width: 600px;
    min-width: 350px;

    > button {
      max-width: 100%;
    }
  }

  @media (min-width: 900px) {
    align-items: initial;

    > div {
      padding: 15px 140px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: relative;
      height: 100%;

      > img {
        display: flex;
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        max-width: 750px;
      }

      > div {
        display: flex;
        position: relative;
        justify-content: center;
        width: 55%;
        padding: 0;

        > p {
          position: absolute;
          right: 5%;
          top: 25%;
          text-align: right;
          font-size: var(--font1);
          color: var(--fixed-white);
          font-weight: 400;
          line-height: 58px;
          max-width: 480px;

          > span {
            color: var(--color-primary);
          }
        }
      }

      form {
        > input {
          width: 100%;
        }
        width: 35%;
      }
    }

    footer {
      display: none;
    }
  }
`;
