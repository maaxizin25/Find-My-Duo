import React from "react";

export interface iAuthContext {
  handleSubmitAuthRegister: any;
  handleSubmitAuthLogin: any;
  currentUser: any;
}

export interface iAuth {
  children: React.ReactNode;
}
