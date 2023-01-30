import { Dispatch, SetStateAction } from "react";

export interface iProfile {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  socialMedia: string;
  url: string;
}

export interface iEditProfile {
  setState: Dispatch<SetStateAction<boolean>>
}
