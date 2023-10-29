import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { store } from '@/store/store';

const userMenu = [
  { name: 'Home', icon: <HomeOutlinedIcon />, path: '/home' },
  { name: 'Team', icon: <PeopleOutlinedIcon />, path: '/team' }
];

const adminMenu = [
  {
    name: 'Admin',
    icon: <ContactsOutlinedIcon />,
    path: '/admin',
    subItems: [
      { name: 'Submenu Item 1', path: '/deep', icon: <MenuOutlinedIcon /> },
      { name: 'Submenu Item 2', path: '/deep/1', icon: <MenuOutlinedIcon /> }
    ]
  }
];

const managerMenu = [
  { name: 'Calendar', icon: <CalendarTodayOutlinedIcon />, path: '/calendar' },
  { name: 'Help', icon: <HelpOutlineOutlinedIcon />, path: '/help' },
  { name: 'Menu', icon: <MenuOutlinedIcon />, path: '/menu' }
];

const generateMenu = () => {
  //TODO refatorar
  const { user: auth } = store.getState();
  let user = auth.user as any;
  if (!user) {
    return {
      aside: {
        items: []
      }
    };
  }
  const role = user.role;

  let menuItems: any = [
    { name: 'Home', icon: <HomeOutlinedIcon />, path: '/home' },
    {
      name: 'Admin',
      icon: <ContactsOutlinedIcon />,
      path: '/admin',
      subItems: [
        { name: 'Submenu Item 1', path: '/deep', icon: <MenuOutlinedIcon /> },
        { name: 'Submenu Item 2', path: 'deep/1', icon: <MenuOutlinedIcon /> }
      ]
    },
    { name: 'example', icon: <HomeOutlinedIcon />, path: '/example' }
  ];
  if (role === 'USER') {
    menuItems = [...userMenu];
  }

  if (role === 'ADMIN') {
    menuItems = [...userMenu, ...adminMenu];
  }

  if (role === 'MANAGER') {
    menuItems = [...userMenu, ...adminMenu, ...managerMenu];
  }

  return {
    aside: {
      items: menuItems
    }
  };
};

export default generateMenu;
