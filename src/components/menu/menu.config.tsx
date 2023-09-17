import store from 'src/store/store'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'

const userMenu = [
  { name: 'Home', icon: <HomeOutlinedIcon />, path: '/home' },
  { name: 'Team', icon: <PeopleOutlinedIcon />, path: '/team' }
]

const adminMenu = [
  { name: 'Contacts', icon: <ContactsOutlinedIcon />, path: '/contacts' },
  { name: 'Invoices', icon: <ReceiptOutlinedIcon />, path: '/invoices' }
]

const managerMenu = [
  { name: 'Calendar', icon: <CalendarTodayOutlinedIcon />, path: '/calendar' },
  { name: 'Help', icon: <HelpOutlineOutlinedIcon />, path: '/help' },
  { name: 'Menu', icon: <MenuOutlinedIcon />, path: '/menu' }
]

const generateMenu = () => {
  const { auth } = store.getState()
  let menuItems: any = []

  if (auth.user?.role === 'USER') {
    menuItems = [...userMenu]
  }

  if (auth.user?.role === 'ADMIN') {
    menuItems = [...userMenu, ...adminMenu]
  }

  if (auth.user?.role === 'MANAGER') {
    menuItems = [...userMenu, ...adminMenu, ...managerMenu]
  }

  return menuItems
}

export default generateMenu
