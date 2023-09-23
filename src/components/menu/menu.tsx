import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import getMenuConfig from "./menu.config";
import { MenuItemComponent } from "./menu-item-component";
import logo from "@/assets/img/logo.svg";

export function Menu() {
  const menuConfig = getMenuConfig();

  return (
    <Drawer
      variant="permanent"
      open={true}
      sx={{
        overflow: "visible",
        width: "240px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "240px",
          boxSizing: "border-box",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "64px",
          bgcolor: "primary.main",
          color: "primary.contrastText",
        }}
      >
        <img src={logo} style={{ width: "300px", height: "70px" }} />
      </Box>
      <List>
        {menuConfig.aside.items.map((menuItem: any) => (
          <MenuItemComponent key={menuItem.name} item={menuItem} />
        ))}
      </List>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          height: "100%",
          pb: 2,
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
