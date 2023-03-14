import {
  MemoryRouter as Router,
  Route,
  useNavigate,
  Routes,
  Link,
  useLocation
} from "react-router-dom";
import {
  Button
} from "@mui/material"
import { ExercisePage } from "./exercise";

export function AdminPage() {
  const path = useLocation().pathname;
  const url = useLocation().search;
  console.log(path);
  console.log(url);
  const navigate = useNavigate();
  return (
    <div>
      <h1>ADMIN</h1>
      <Routes>
      
      </Routes>
      <Button onClick={() => {
        navigate(`exercise`)
      }}>exercicios</Button>
    </div>
  );
}
