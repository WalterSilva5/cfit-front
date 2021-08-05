import PageHeader from '@/pages/components/PageHeader';

const PageTreinos = (props) => (
  <div>
    <PageHeader />
    <h1 className="text-center display-3">
      TREINOS
      {' '}
    </h1>

    <div className="d-flex justify-content-center mt-3">
      <button className="btn btn-lg btn-primary">CADASTRAR NOVO TREINO</button>
    </div>
  </div>

);

export default PageTreinos;
