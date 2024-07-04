"use client";
import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WidgetsIcon from "@mui/icons-material/Widgets";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FolderIcon from "@mui/icons-material/Folder";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { AccountCircle } from "@mui/icons-material";
import HeaderWrapper from "./HeaderWrapper";
import logo from "../Images/LOgo.png";
import Image from "next/image";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Icons = [
  <DashboardIcon />,
  <WidgetsIcon />,
  <PeopleOutlineIcon />,
  <PermMediaIcon />,
];
const icons2 = [<LocalPhoneIcon />, <FolderIcon />, <SettingsIcon />];

const Header = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <HeaderWrapper>
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          open={open}
          sx={{ background: "#fff", color: "black" }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{ mr: 2, ...(open && { display: "none" }) }}
                >
                  <MenuIcon />
                </IconButton>
                <Box>
                  <Typography variant="h5" noWrap component="div">
                    Good Morning Anna
                  </Typography>
                  <Box>
                    <span style={{ fontSize: "11px" }}>
                      Hope you have a great day
                    </span>
                  </Box>
                </Box>
              </Toolbar>
            </Box>
            <Box>
              <Box display="flex" paddingTop="20px">
                <Box sx={{ paddingTop: "6px" }}>
                  <SearchIcon />
                  <CircleNotificationsIcon />
                </Box>
                <IconButton>
                  <AccountCircle />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </AppBar>
        <MuiDrawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <Box marginTop={"-60px"}>
            <Image src={logo} alt="rasm bor" layout="responsive" />
          </Box>
          <List>
            {["Dashboard", "Teams", "Employees", "Projects"].map(
              (text, index) => (
                <ListItem key={text} disablePadding className="list-items">
                  <ListItemButton>
                    <ListItemIcon>{Icons[index]}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
          <Divider />
          <List>
            {["Meetings", "Tasks", "Settings"].map((text, index) => (
              <ListItem key={text} disablePadding className="list-items">
                <ListItemButton>
                  <ListItemIcon>{icons2[index]}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          
        </MuiDrawer>
        <Main open={open}>
          <DrawerHeader />
          {children}
        </Main>
      </Box>
    </HeaderWrapper>
  );
};

export default Header;
