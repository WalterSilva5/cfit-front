import React from "react";
import "./App.module.css";
import { Box } from "@mui/material";
import { CfitNav } from "./components";
import { AdminPage, ExercisePage } from "./pages/admin";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/auth/login";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  RouteComponentProps // Importe a interface RouteComponentProps
} from "react-router-dom";

function App() {
  return (
    <Box
      className="App"
      sx={{
        margin: "0 auto",
        padding: "0"
      }}
    >
      <Router>
        <CfitNav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/admin/*" render={AdminRoutes} />
          <Route path="/auth/*" render={AuthRoutes} />
          {/* Redirect for any unknown route */}
          <Redirect to="/" />
        </Switch>
      </Router>
    </Box>
  );
}

function AdminRoutes({ match }: RouteComponentProps) {
  const { path } = match;
  return (
    <Switch>
      <Route exact path={path} component={AdminPage} />
      <Route path={`${path}/exercise`} component={ExercisePage} />
    </Switch>
  );
}

function AuthRoutes({ match }: RouteComponentProps) { 
  const { path } = match;
  return (
    <Switch>
      <Route exact path={path} component={LoginPage} />
      <Route path={`${path}/register`} component={LoginPage} />
      <Route exact path={`${path}/login`} component={LoginPage} />
    </Switch>
  );
}

export default App;
