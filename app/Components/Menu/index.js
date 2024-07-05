import DashboardIcon from "@mui/icons-material/Dashboard";
import WidgetsIcon from "@mui/icons-material/Widgets";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FolderIcon from "@mui/icons-material/Folder";
import SettingsIcon from "@mui/icons-material/Settings";

const menu01 = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    path: "/",
  },
  {
    title: "Teams",
    icon: <WidgetsIcon />,
    path: "/widgets",
  },
  {
    title: "Employees",
    icon: <PeopleOutlineIcon />,
    path: "/employees",
  },
  {
    title: "Projects",
    icon: <PermMediaIcon />,
    path: "/media",
  },
  {
    title: "Meetings",
    icon: <LocalPhoneIcon />,
    path: "/meetings",
  },
  {
    title: "Tasks",
    icon: <FolderIcon />,
    path: "/tasks",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    path: "/settings",
  },
];
export default menu01;
