import React from 'react';
import { useNavigate } from 'react-router';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import getMenuConfig from '../menu.config';

function Menu() {
  const navigate = useNavigate();
  const menuConfig = getMenuConfig(); // Obtenha a configuração de menu com base no papel do usuário

  return (
    <ProSidebar>
      <Menu>
        {menuConfig.aside.items.map((menuItem) => (
          <MenuItem
            key={menuItem.title}
            icon={menuItem.icon}
            onClick={() => {
              navigate(menuItem.page);
            }}
          >
            {menuItem.title}
          </MenuItem>
        ))}
      </Menu>
    </ProSidebar>
  );
}

export default Menu;
