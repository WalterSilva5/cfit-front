import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  Link,
  Box,
  Container,
  Grid
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

export function CfitNav() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            mr: 2,
            display: "none"
          }}
        >
          <MenuIcon />
        </IconButton>
        <Link variant="h6" color="inherit" component="div">
          Home
        </Link>
      </Toolbar>
    </AppBar>
  );
}
