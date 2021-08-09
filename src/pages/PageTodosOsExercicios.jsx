import TabelaExercicio from './components/CfitAdmin/CfitAdminTreinos/Exercicio/TabelaExercicio';
import PageHeader from './components/PageHeader';

const PageTodosOsExercicios = (props) => (
  <div>
    <PageHeader />
    <div className="d-flex justify-content-center">
      <h1 className="display-5">TODOS OS EXERCICIOS</h1>
    </div>
    <TabelaExercicio visualizando />
    <div />
  </div>
);

export default PageTodosOsExercicios;
