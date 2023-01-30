import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
  row-gap: 48px;

  & > h2 {
    color: var(--gray1);
    font-size: var(--font4);
    font-weight: 400;
    width: 100%;
    margin-top: 32px;
  }

  & > button {
    width: 48%;
    height: 50px;
    border-radius: var(--radius1);
    color: var(--fixed-white);
    background-color: #bd2000;
    font-size: var(--font5);
    border: none;
  }

  button + button {
    background-color: var(--color-primary);
  }
`;

export default StyledDiv;
