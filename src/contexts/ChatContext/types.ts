import React from "react";

export interface iChatContext {
  handleSelect: (userUid: string) => void;
  setSearchName: any;
  handleSubmitSearch: any;
  handleKey: (e: { code: string }) => void;
  user: any;
  data: any;
  dispatch: any;
}

export interface iChat {
  children: React.ReactNode;
}
