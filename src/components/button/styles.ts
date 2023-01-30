import styled, { css } from "styled-components";
import { iButton } from "./types";

export const StyledButton = styled.button<iButton>`
  ${({ buttonType }) => {
    switch (buttonType) {
      case "login":
        return css`
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
        `;

      case "register":
        return css`
          color: var(--fixed-white);
          background-color: var(--color-primary);

          width: 100%;
          height: 66px;

          font-size: var(--font2);
          font-weight: 700;
          font-family: "Inter";

          border: none;
          border-radius: var(--radius1);

          :hover {
            background-color: var(--gray5);
            box-shadow: 0px 4px 4px var(--gray5);
          }
        `;

      case "searchUser":
        return css`
          color: var(--fixed-white);
          background-color: var(--color-primary);

          padding: 8px 20px;

          border: none;
          border-radius: 4px;

          :hover {
            filter: brightness(1.2);
          }
        `;

      case "icons":
        return css`
          color: var(--gray1);
          background-color: transparent;

          display: flex;
          align-items: center;
          justify-content: center;

          width: 60px;
          padding: 10px 0;

          font-size: var(--font3);

          border: none;
          border-radius: var(--radius2);

          :hover {
            background-color: var(--gray2);
            color: var(--fixed-white);
          }

          :focus {
            background-color: var(--color-primary);
            color: var(--fixed-white);
          }

          @media (min-width: 900px) {
            width: 100%;
          }
        `;

      case "post":
        return css`
          color: var(--fixed-white);
          background-color: var(--color-primary);

          width: 100%;
          max-width: 150px;
          height: 39px;

          box-shadow: 0px 4px 4px var(--color-primary);
          border: none;
          border-radius: var(--radius1);

          :hover {
            filter: brightness(1.2);
          }
        `;

      case "userIcon":
        return css`
          color: var(--gray1);
          background-color: transparent;

          border: 2px solid var(--color-primary);
          border-radius: 100%;

          height: 60px;
          width: 60px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `;

      case "smallIcon":
        return css`
          color: var(--gray3);
          border: none;
          background-color: transparent;
          font-size: var(--font3);

          :hover {
            color: white;
          }
        `;

      case "exclueProfile":
        return css`
          width: 100%;
          height: 70px;
          padding: 0 11px;

          border: none;
          border-radius: var(--radius1);

          color: #bd2000;
          background-color: var(--gray3);
          font-size: 22px;
          font-weight: 500;

          display: flex;
          align-items: center;
          justify-content: space-between;

          :hover {
            background-color: #bd2000;
            color: var(--fixed-white);
          }
        `;

      case "logout":
        return css`
          width: 100%;
          height: 70px;
          padding: 0 11px;

          border: none;
          border-radius: var(--radius1);

          color: var(--color-primary);
          background-color: var(--gray3);
          font-size: 22px;
          font-weight: 500;

          display: flex;
          align-items: center;
          justify-content: space-between;

          :hover{
            background-color: var(--color-primary);
            color: var(--fixed-white);
        `;
    }
  }}

  font-weight: 700;
  text-align: center;
`;
