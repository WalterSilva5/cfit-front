import React from "react";
import { store } from "@/store/store";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
interface MenuItem {
  name: string;
  icon: React.ReactNode;
  path: string;
  subItems?: MenuItem[];
}

const userNavbar: MenuItem[] = [
  { name: "Home", icon: <HomeOutlinedIcon />, path: "/home" },
  { name: 'Example', icon: <SettingsOutlinedIcon />, path: '/example' },
  { name: "Request", icon: <SettingsOutlinedIcon />, path: "/page-with-request" },
  { name: "Login", icon: <SettingsOutlinedIcon />, path: "/auth/login" },
];

const adminNavbar: any = [
  {
    name: "Sample Submenu",
    icon: <ContactsOutlinedIcon />,
    path: "/sample-submenu",
    subItems: [
      { name: "Submenu Item 1", path: "/deep", icon: <MenuOutlinedIcon /> },
      { name: "Submenu Item 2", path: "/deep/1", icon: <MenuOutlinedIcon /> },
    ],
  },
];

const managerNavbar: any = [
  { name: 'User', icon: <PeopleOutlinedIcon />, path: '/user' },
];

const generateNavbar = () => {
  const { auth } = store.getState();
  let navbarItems: any = [
    ...userNavbar,
    ...adminNavbar,
    ...managerNavbar,
  ];

  if (auth.user?.role === "USER") {
    navbarItems = [...userNavbar];
  }

  if (auth.user?.role === "ADMIN") {
    navbarItems = [...userNavbar, ...adminNavbar];
  }

  if (auth.user?.role === "MANAGER") {
    navbarItems = [...userNavbar, ...adminNavbar, ...managerNavbar];
  }

  return {
    items: navbarItems,
  };
};

export default generateNavbar;
