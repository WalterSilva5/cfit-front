import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import getMenuConfig from './menu.config';
import { MenuItemComponent } from './menu-item-component';
import { Logo } from '../../assets/img/logo';
import { useTheme } from '@mui/material/styles';

export function Menu(props: { useMenu: boolean }) {
  const menuConfig = getMenuConfig();
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      open={true}
      sx={{
        overflow: 'visible',
        width: '240px',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '240px',
          boxSizing: 'border-box'
        },
        display: props.useMenu ? 'block' : 'none'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '64px',
          bgcolor: theme.palette.primary.main, // Use o valor do tema
          color: theme.palette.primary.contrastText // Use o valor do tema
        }}
      >
        <Logo
          style={{
            width: '100px',
            height: '100px',
            userSelect: 'none'
          }}
        />
      </Box>
      <List>
        {menuConfig.aside.items.map((menuItem: any) => (
          <MenuItemComponent key={menuItem.name} item={menuItem} />
        ))}
      </List>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: '100%',
          pb: 2
        }}
      >
        <Button variant="outlined" onClick={() => {}}>
          Logout
        </Button>
      </Box>
    </Drawer>
  );
}

export default Menu;
