import { withStyles } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

export const BoxInput = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  position: relative;

  i {
    position: absolute;
    top: 17px;
    right: 50px;

    cursor: pointer;
  }
`;

export const CssTextField = withStyles({
  root: {
    backgroundColor: "#21232B",
    borderRadius: "4px",

    "& input:valid + fieldset": {
      borderColor: "green",
      borderWidth: 2,
    },
    "&  label.MuiFormLabel-root": {
      color: "#A9AAB2",

      "& span.MuiFormLabel-asterisk": {
        color: "transparent",
      },
    },

    "& input": {
      color: "#A9AAB2",
    },

    "& input::placeholder": {
      color: "#A9AAB2",
    },

    "& label.Mui-focused": {
      color: "#A9AAB2",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#21232B",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#21232B",
      },
      "&:hover fieldset": {
        boder: "2px solid #21232B",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#0D81EC",
      },
    },
  },
})(TextField);
