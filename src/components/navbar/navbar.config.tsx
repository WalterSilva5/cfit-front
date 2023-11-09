import React from "react";
import { store } from "@/store/store";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import UsersOutlinedIcon from "@mui/icons-material/Face";
import LoginIcon from "@mui/icons-material/Login";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { Role } from "@/enums/role.enum";

interface MenuItem {
  name: string;
  icon: React.ReactNode;
  path: string;
  subItems?: MenuItem[];
}

const userNavbar: MenuItem[] = [
  { name: "Home", icon: <HomeOutlinedIcon />, path: "/home" },
  { name: "Example", icon: <CompareArrowsIcon />, path: "/example" },
  {
    name: "Request",
    icon: <RequestPageIcon />,
    path: "/page-with-request",
  },
  { name: "Login", icon: <LoginIcon />, path: "/auth/login" },
];

const adminNavbar: MenuItem[] = [
  {
    name: "Sample Submenu",
    icon: <ContactsOutlinedIcon />,
    path: "/sample-submenu",
    subItems: [
      { name: "Submenu Item 1", path: "/deep", icon: <MenuOutlinedIcon /> },
      { name: "Submenu Item 2", path: "/deep/1", icon: <MenuOutlinedIcon /> },
    ],
  },{
		name: "User",
		icon: <UsersOutlinedIcon />,
		path: "/user",
	}
];

const managerNavbar: MenuItem[] = [
  { name: "User", icon: <PeopleOutlinedIcon />, path: "/user" },
];

export const generateNavbar = () => {
  const { user: authData } = store.getState();
  const user = authData?.auth?.authData?.user;

  if (!user) {
    return { items: [] };
  }

  const role = user.role;
  let navbarItems: MenuItem[] = [];

  if (role === Role.USER) {
    navbarItems = [...userNavbar];
  } else if (role === Role.ADMIN) {
    navbarItems = [...userNavbar, ...adminNavbar];
  } else if (role === Role.MANAGER) {
    navbarItems = [...userNavbar, ...adminNavbar, ...managerNavbar];
  }

  return { items: navbarItems };
};

export default generateNavbar;
