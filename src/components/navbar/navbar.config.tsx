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

export interface MenuItem {
  name: string;
  icon: React.ReactNode;
  path: string;
  subItems?: MenuItem[];
}

const userNavbar: MenuItem[] = [
  { name: "Home", icon: <HomeOutlinedIcon />, path: "/home" },
  { name: "Meus Treinos", icon: <HomeOutlinedIcon />, path: "/my-workouts" },
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
    name: "Gerenciamento",
    icon: <ContactsOutlinedIcon />,
    path: "/management",
    subItems: [
      { name: "Grupos Musculares", path: "/muscle-group", icon: <MenuOutlinedIcon /> },
      { name: "Exercicios", path: "/exercise", icon: <MenuOutlinedIcon /> },
      { name: "Treinos", path: "/workout", icon: <MenuOutlinedIcon /> },
    ],
  },{
		name: "Usuarios",
		icon: <UsersOutlinedIcon />,
		path: "/users",
	}
];

const managerNavbar: MenuItem[] = [
  { name: "Usuarios", icon: <PeopleOutlinedIcon />, path: "/users" },
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
