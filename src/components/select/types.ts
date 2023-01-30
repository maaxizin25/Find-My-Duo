import { UseFormRegisterReturn } from "react-hook-form";

export interface iSelect {
  placeholder: string;
  list: any[];
  label: string;
  register?: UseFormRegisterReturn<string>;
}
