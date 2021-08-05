import PageHeader from '@/pages/components/PageHeader';
import { NavLink } from 'react-router-dom';

const PageTreinos = (props) => (
  <div>
    <PageHeader />
    <h1 className="text-center display-3">
      TREINOS
      {' '}
    </h1>

    <div className="d-flex justify-content-center mt-3">
      <NavLink className="btn btn-lg btn-primary" to="cadastro_treino">CADASTRAR NOVO TREINO</NavLink>
    </div>
  </div>

);

export default PageTreinos;
