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
import {
  MemoryRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";

export function CfitNav(props: any) {
  const navigate = useNavigate();
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
        <Typography variant="h6" color="inherit" component="div">
          <Link href="/" underline="none" color="inherit">
            CFIT
          </Link>
        </Typography>
        <Box />
        <Button
          sx={{ ml: "20px" }}
          color="inherit"
          onClick={() => navigate("/")}
        >
          Home
        </Button>
        <Button color="inherit" onClick={() => navigate("/admin")}>
          Admin
        </Button>
      </Toolbar>
    </AppBar>
  );
}
