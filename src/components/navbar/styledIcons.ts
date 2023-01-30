import ChatIcon from "@mui/icons-material/Chat";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import { styled as style } from "@mui/system";

export const StyledChatIcon = style(ChatIcon, {
  name: "StyledChatIcon",
  slot: "Wrapper",
})({
  color: "white",
});

export const StyledHomeIcon = style(HomeIcon, {
  name: "StyledHomeIcon",
  slot: "Wrapper",
})({
  color: "white",
});

export const StyledUserIcon = style(PersonIcon, {
  name: "StyledUserIcon",
  slot: "Wrapper",
})({
  color: "white",
});
