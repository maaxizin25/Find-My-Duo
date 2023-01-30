import styled from "styled-components";

export const StyledTopHome = styled.div`
  background-color: var(--gray5);

  h2 {
    color: var(--gray1);
    padding: 0 12px;
    padding-top: 1rem;
  }

  ul {
    display: flex;
    gap: 15px;
    padding: 1rem;
    overflow: scroll;
    ::-webkit-scrollbar {
      width: 1px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }
  }

  li {
    display: flex;
    height: 80px;
    align-items: center;

    figure {
      border: 2px solid transparent;
      opacity: 0.5;
      height: 60px;
      width: 60px;
      display: flex;
      align-items: center;
      border-radius: var(--radius1);

      img {
        height: 100%;
        width: 100%;
        border-radius: var(--radius1);
        background-color: transparent;
      }

      :hover {
        opacity: 1;
        cursor: pointer;
        border-color: var(--color-primary);
      }
    }
  }

  div {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--gray6);
    padding: 0 12px;

    span {
      display: flex;
    }
  }
`;
