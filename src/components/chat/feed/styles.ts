import styled from "styled-components";

export const ContainerChatFeed = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: calc(100% - 5.75rem);
  background: var(--gray5);
  gap: 26px;
  padding: 20px 10px 0px 10px;

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    div {
      display: flex;
      justify-content: space-between;

      button {
        background: transparent;
        border: none;
      }

      h1 {
        font-style: normal;
        font-weight: 700;
        font-size: var(--font3);
        line-height: 33px;
        color: var(--gray1);
      }
    }
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;

    > h3 {
      font-style: normal;
      font-weight: 400;
      font-size: var(--font5);
      line-height: 19px;
      color: var(--gray1);
    }

    div {
      display: flex;
      align-items: center;
      gap: 17px;
      overflow-x: scroll;
      white-space: nowrap;
      scroll-behavior: smooth;

      ::-webkit-scrollbar {
        display: none;
      }

      figure {
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        background: var(--color-primary);
        border: 1px solid var(--color-primary);
        border-radius: 50%;

        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          cursor: pointer;
        }
      }
    }
  }

  > div:nth-child(3) {
    display: flex;
    flex-direction: column;
    gap: 35px;
    height: 100%;

    > h3 {
      font-style: normal;
      font-weight: 400;
      font-size: var(--font5);
      line-height: 19px;
      color: var(--gray1);
    }

    > div {
      height: 100%;
      overflow-y: scroll;
      padding-bottom: 5.75rem;
      ::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;
