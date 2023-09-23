import { useNavigate } from "react-router";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import getMenuConfig from "./menu.config";

export function MenuComponent() {
  const navigate = useNavigate();
  const menuConfig = getMenuConfig();

  return (
    <Drawer
      variant="permanent"
      open={true}
      sx={{
        width: "240px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "240px",
          boxSizing: "border-box",
        },
      }}
    >
      <List>
        {menuConfig.aside.items.map((menuItem: any) => (
          <ListItem
            button
            key={menuItem.name}
            onClick={() => {
              navigate(menuItem.path);
            }}
          >
            {menuItem.icon && <ListItemIcon>{menuItem.icon}</ListItemIcon>}
            <ListItemText primary={menuItem.name} />
          </ListItem>
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
        <Button
          variant="outlined"
          onClick={() => {
            navigate("/login");
          }}
        >
          Logout
        </Button>
      </Box>  
    </Drawer>
  );
}

export default MenuComponent;
