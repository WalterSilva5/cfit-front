import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Button } from '@mui/material';
import { ExercisePage } from './exercise';

export function AdminPage(props: any) {
  const { history } = props;
  return (
    <div>
      <h1>ADMIN</h1>
      <Router>
        <Route path="/admin/exercise" Component={ExercisePage} />
      </Router>
      <Button
        onClick={() => {
          history.push('/admin/exercise');
        }}
      >
        exercicios
      </Button>
    </div>
  );
}

export default AdminPage;