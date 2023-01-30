import React, { useContext } from "react";
import { HeaderStyled } from "./styles";
import logoHeader from "../../assets/logo-inline.svg";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext/UserContext";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setUser(null)
    signOut(auth);
    navigate("/");
  };

  return (
    <HeaderStyled>
      <img src={logoHeader} alt="Logo Find my Duo" />
      {user ? (
        <button title="Logout" onClick={handleLogout}>
          <LogoutIcon sx={{ fontSize: 30 }} />
        </button>
      ) : null}
    </HeaderStyled>
  );
};

export default Header;