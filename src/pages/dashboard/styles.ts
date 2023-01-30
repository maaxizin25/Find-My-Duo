import { createGlobalStyle } from "styled-components";

export const StyledGrid = createGlobalStyle`
body {
    margin-left: 360px;
}

@media (max-width: 991px) {
    body {
        margin-left: 0;
    }
  }
`;
