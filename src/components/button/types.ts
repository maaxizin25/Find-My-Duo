import React from "react";

export interface iButton {
  buttonType:
    | "login"
    | "register"
    | "icons"
    | "searchUser"
    | "post"
    | "userIcon"
    | "smallIcon"
    | "exclueProfile"
    | "logout";
  onClick?: (e: any) => void;
  type: "submit" | "button";
  children: React.ReactElement | string;
}
