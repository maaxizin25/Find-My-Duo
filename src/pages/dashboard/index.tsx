import Header from "../../components/header/header";
import { useState } from "react";
import { tDevice } from "../../components/navbar/types";
import { HomeTopList } from "../../components/homeTopList/homeTopList";
import { UserPostCard } from "../../components/card/userPostCard/UserPostCard";
import { MobileNavBar } from "../../components/navbar/mobileNavbar";
import { DesktopNavBar } from "../../components/navbar/desktopNavbar";
import { StyledGrid } from "./styles";

export const DashboardPage = () => {
  const [device, setDevice] = useState<tDevice>("desktop");

  return (
    <>
      <StyledGrid />
      <Header />
      <HomeTopList />
      <UserPostCard />
      <MobileNavBar />
      <DesktopNavBar />
    </>
  );
};
