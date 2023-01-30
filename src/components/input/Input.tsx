import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { iInput } from "./types";
import { useState } from "react";
import { BoxInput, CssTextField } from "./styles";

export const Input = ({
  children,
  type,
  register,
  errorInput,
  placeHolder,
  defaultValue,
}: iInput) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <BoxInput>
      {type === "password" ? (
        <>
          <CssTextField
            error={errorInput ? true : false}
            required={(errorInput && false) || (!errorInput && true)}
            type={showPassword ? "text" : "password"}
            id="outlined-basic"
            variant="outlined"
            label={children}
            placeholder={placeHolder}
            {...register}
            defaultValue={defaultValue}
          />
          <i onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <VisibilityIcon color="primary" />
            ) : (
              <VisibilityOffIcon color="primary" />
            )}
          </i>
        </>
      ) : (
        <CssTextField
          error={errorInput ? true : false}
          required={(errorInput && false) || (!errorInput && true)}
          type={type}
          id="outlined-basic-1"
          label={children}
          variant="outlined"
          placeholder={placeHolder}
          {...register}
          defaultValue={defaultValue}
        />
      )}
    </BoxInput>
  );
};
