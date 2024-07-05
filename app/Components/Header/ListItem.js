import { styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";

const MyListItem = styled(ListItem)(({ theme }) => ({
  "& span": { fontWeight: "600 !important" },
  "&:hover, &.active": {
    trasition: "0.3s",
    color: "white",
    background: " #6956E5",

    "& svg": { color: "white" },
  },
}));

export default MyListItem;
