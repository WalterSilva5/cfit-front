import { useNavigate } from 'react-router';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import getMenuConfig from './menu.config';

export function MenuComponent() {
  const navigate = useNavigate();
  const menuConfig = getMenuConfig(); // Obtenha a configuração de menu com base no papel do usuário

  return (
    <Drawer variant="permanent" open={true}>
      <List>
        {menuConfig.aside.items.map((menuItem: any) => (
          <ListItem 
            button 
            key={menuItem.title} 
            onClick={() => {
              navigate(menuItem.page);
            }}
          >
            {menuItem.icon && <ListItemIcon>{menuItem.icon}</ListItemIcon>}
            <ListItemText primary={menuItem.title} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default MenuComponent;
