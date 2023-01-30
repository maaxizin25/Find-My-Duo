import styled from "styled-components";

export const Teste = styled.div`
  min-height: max-content;
  /* padding-bottom: 1px; */
`;
export const CardContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
  padding: 1rem 1rem 8.5rem 1rem;
`;

export const StyledCard = styled.li`
  height: max-content;
  min-height: 196px;
  border-radius: 4px;

  background-color: var(--gray5);

  padding: 9px 16px;

  figure {
    width: 50px;
    height: 50px;
    background-color: transparent;
    margin-right: 8px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`;

export const CardUserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  div {
    display: flex;
    align-items: center;
  }

  h3 {
    font-size: var(--font5);
    color: var(--gray1);
    font-weight: 700;
  }

  span {
    font-size: var(--font6);
    color: var(--gray3);
  }
`;

export const CardUserContact = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-top: 23px;

  color: var(--fixed-white);

  div {
    display: flex;
    width: 100px;
    justify-content: space-between;
  }

  img {
    height: 32px;
    width: 32px;
  }

  > p {
  }

  #Options {
    display: flex;
    flex-direction: column;
    gap: 20px;

    button {
      width: fit-content;
      padding: 0px;
      margin-left: auto;
    }
  }
`;
