import PageHeader from './PageHeader';

const Carregando = () => (
  <div className="container">
    <PageHeader />
    <div className="row">
      <div className="col-md-12">
        <div className="alert alert-info">
          <i
            className="fa fa-spinner fa-pulse fa-3x fa-fw"
            aria-hidden="true"
          />
          <span className="sr-only">Carregando...</span>
        </div>
      </div>
    </div>
  </div>
);

export default Carregando;
