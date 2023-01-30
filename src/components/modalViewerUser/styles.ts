import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 32px;
  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 138px;
    height: 138px;
    border-radius: 50%;
    border: 2px solid var(--color-primary);
  }

  & > h2 {
    width: 100%;
    text-align: center;
    font-size: var(--font3);
    color: var(--fixed-white);
  }
  & > h3 {
    margin-right: auto;
    color: var(--gray1);
    font-size: var(--font5);
    margin-bottom: -22px;
  }
  & > div {
    width: 100%;
    background-color: var(--gray4);
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    border-radius: var(--radius1);
    gap: 16px;
    align-items: center;
    padding: 6px;
  }
  * {
    scrollbar-width: auto;
    scrollbar-color: var(--gray4);
  }
  *::-webkit-scrollbar {
    height: 6px;
  }
  *::-webkit-scrollbar-track {
    background: transparent;
    width: 4px;
    height: 4px;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #c2c2c2;
    border-radius: var(--radius1);
    border: 0px solid #ffffff;
    width: 4px;
    height: 4px;
  }
  #game {
    max-width: 45px;
    max-height: 45px;
    border-radius: var(--radius1);
  }

  #profile {
    object-fit: cover;
    max-width: 225px;
    min-height: 125%;
  }
`;

export const StyledLink = styled(Link)`
  width: 30px;
  height: 30px;
  background-color: transparent;
`;

export const DiscordButton = styled.button`
  width: 40px;
  height: 30px;
  background-color: transparent;
  border: none;
`;
