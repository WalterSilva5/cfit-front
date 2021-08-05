import PageHeader from '@/pages/components/PageHeader';
import FormCadastroTreino from './FormCadastroTreino';
const TelaCadastroTreino = (props) => (
  <div>
    <PageHeader />
    <h1 className="text-center display-3">
      CADASTRO DE TREINO
      {' '}
    </h1>

    <div className="d-flex justify-content-center">
      <div className="border border-secondary col-sm-12 col-lg-8 rounded wsi-container-dark wsi-shadow-light">
        <FormCadastroTreino/>
      </div>
    </div>
  </div>

);

export default TelaCadastroTreino;
