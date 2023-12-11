import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { store } from '@/store/store';
import { MenuItem } from '@/components/navbar/navbar.config';
import RequestPageIcon from "@mui/icons-material/RequestPage";
import UsersOutlinedIcon from "@mui/icons-material/Face";
import LoginIcon from "@mui/icons-material/Login";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { Role } from "@/enums/role.enum";

const userMenu: MenuItem[] = [
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

const adminMenu: MenuItem[] = [
  {
    name: "Gerenciamento",
    icon: <ContactsOutlinedIcon />,
    path: "/management",
    subItems: [
      { name: "Grupos Musculares", path: "/muscle-groups", icon: <MenuOutlinedIcon /> },
      { name: "Exercicios", path: "/exercises", icon: <MenuOutlinedIcon /> },
      { name: "Treinos", path: "/workouts", icon: <MenuOutlinedIcon /> },
    ],
  },{
		name: "Usuarios",
		icon: <UsersOutlinedIcon />,
		path: "/users",
	}
];

const managerMenu: MenuItem[] = [
  { name: "Usuarios", icon: <PeopleOutlinedIcon />, path: "/users" },
];

export const generateMenu = () => {
  const { user: authData } = store.getState();
  const user = authData?.auth?.authData?.user;

  if (!user) {
    return { items: [] };
  }

  const role = user.role;
  let menuItems: MenuItem[] = [];

  if (role === Role.USER) {
    menuItems = [...userMenu];
  } else if (role === Role.ADMIN) {
    menuItems = [...userMenu, ...adminMenu];
  } else if (role === Role.MANAGER) {
    menuItems = [...userMenu, ...adminMenu, ...managerMenu];
  }

  return {
    aside: {
      items: menuItems
    }
  };
};

export default generateMenu;
