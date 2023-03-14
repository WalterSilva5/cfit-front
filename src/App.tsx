import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.module.css";
import { Box } from "@mui/material";
import { CfitNav } from "./components";
import { AdminPage } from "./pages/admin";
import { HomePage } from "./pages/home";
import {
  MemoryRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

function App() {
  return (
    <Box
      className="App"
      sx={{
        backgroundColor: "red",
        margin: "0 auto",
        padding: "0"
      }}
    >
      <Router>  
        <CfitNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
        {/* <Route path="home">
          <Route path="/home" element={<Home />} />
          <Route path="/home/:id" element={<Home />} />
        </Route> */}
      </Router>
    </Box>
  );
}

export default App;
