"use client";
import { Box, ListItemButton } from "@mui/material";
import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { AccountCircle } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import Image from "next/image";
import logo from "../Images/LOgo.png";
import Aside from "../Aside";
import Widgets from "../Widgets/page";
import { Typography } from "@mui/material";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FolderIcon from "@mui/icons-material/Folder";
import SettingsIcon from "@mui/icons-material/Settings";
import Meetings from "../Meetings/page";
import Settings from "../Settings/page";
import Tasks from "../Tasks/page";
import Projects from "../Projects/page";
import MyListItem from "./ListItem";
import Employees from "../Employees/page";

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

const menuItems = [
  { title: "Dashboard", icon: <DashboardIcon />, component: <Aside /> },
  { title: "Teams", icon: <WidgetsIcon />, component: <Widgets /> },
  { title: "Employees", icon: <PeopleOutlineIcon />, component: <Employees /> },
  { title: "Projects", icon: <PermMediaIcon />, component: <Projects /> },
  { title: "Meetings", icon: <LocalPhoneIcon />, component: <Meetings /> },
  { title: "Tasks", icon: <FolderIcon />, component: <Tasks /> },
  { title: "Settings", icon: <SettingsIcon />, component: <Settings /> }
];

const Header = ({ onNavigate }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(menuItems[0].title);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleNavigate = (component, title) => {
    setActiveItem(title);
    onNavigate(component);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        open={open}
        sx={{ background: "#fff", color: "black" }}
      >
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
          <Typography variant="h6" noWrap component="div">
            Good Morning Anna
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <CircleNotificationsIcon />
          </IconButton>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </Toolbar>
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
          <Image src={logo} alt="Logo" layout="responsive" />
        </Box>
        <List>
          {menuItems.map((item) => (
            <MyListItem
              key={item.title}
              disablePadding
              className={item.title === activeItem ? "active" : ""}
            >
              <ListItemButton
                onClick={() => handleNavigate(item.component, item.title)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </MyListItem>
          ))}
        </List>
        <Divider />
      </MuiDrawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
};

export default Header;
