import styled from "styled-components";

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    margin-top: 16px;
  }

  & > span {
    margin-bottom: -10px;
    color: #bbbbbb;
    font-size: 14px;
    padding-left: 6px;
  }

  textarea {
    resize: vertical;
    background-color: #21232b;
    color: #bbbbbb;
    padding: 8px;
    border: none;
    border-radius: var(--radius1);
    height: 200px;
    max-height: 350px;
    font-size: var(--font5);
    outline: none;
  }
  textarea::placeholder {
    font-family: "Inter";
    font-weight: 400;
    font-size: var(--font5);
    color: #bbbbbb;
  }

  .MuiList-root {
    background-color: #21232b;
  }

  button + button {
    background-color: var(--color-red);
    box-shadow: none;
  }
`;

export default StyledForm;
