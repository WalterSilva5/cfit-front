// Menu.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import generateMenu from './menu.config';

interface MenuItem {
  name: string;
  icon: React.ReactElement;
  path: string;
  subItems?: MenuItem[];
}

const Menu: React.FC = () => {
  const [open, setOpen] = React.useState<string | null>(null);
  const menuConfig = generateMenu().aside.items;

  const handleToggle = (name: string) => {
    if (open === name) {
      setOpen(null);
    } else {
      setOpen(name);
    }
  };

  return (
    <List>
      {menuConfig.map((item: MenuItem) => (
        <React.Fragment key={item.name}>
          <ListItem button component={Link} to={item.path} onClick={() => handleToggle(item.name)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
            {item.subItems && (open === item.name ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
          {item.subItems && item.subItems.map((subItem: MenuItem) => (
            <Collapse in={open === item.name} timeout="auto" unmountOnExit key={subItem.name}>
              <List component="div" disablePadding>
                <ListItem button component={Link} to={subItem.path} style={{ paddingLeft: 32 }}>
                  <ListItemIcon>{subItem.icon}</ListItemIcon>
                  <ListItemText primary={subItem.name} />
                </ListItem>
              </List>
            </Collapse>
          ))}
        </React.Fragment>
      ))}
    </List>
  );
};

export default Menu;
