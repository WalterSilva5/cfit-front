import { useState } from "react";
import "./App.module.css";
import { Box } from "@mui/material";
import { CfitNav } from "./components";
import { AdminPage } from "./pages/admin";
import { HomePage } from "./pages/home";
import { ExercisePage } from "./pages/admin/exercise/exercise.page";
import {
  MemoryRouter as Router,
  Route,
  useNavigate,
  Link,
  Routes
} from "react-router-dom";

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
          <Route path="admin">
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/exercise" element={<ExercisePage />} />
          </Route>
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
