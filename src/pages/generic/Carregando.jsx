import carregandoGif from '@/assets/loading.gif';
import PageHeader from '@/pages/components/PageHeader';

const Carregando = () => (
  <div className="container">
    <div className="text-center d-flex justify-content-center">
      <div className="col-md-12">
        <img
          className="img-fluid rounded-circle p-0 shadow"
          style={{ backgroundColor: '#dbdbdb', width: '400px', background: 'transparent' }}
          src={carregandoGif}
          alt=""
        />
        <h2>
          <b>CARREGANDO</b>
        </h2>
      </div>
    </div>
  </div>
);

export default Carregando;
