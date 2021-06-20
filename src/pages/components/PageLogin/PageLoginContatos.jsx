import iconInstagram from '../../../assets/img/instagram.png';

const PageLoginContatos = () => (
  <div
    className="row wsi-border-container mt-3 nm p-3 d-flex justify-content-center text-center py-3 col-12"
  >
    <h1><b>CONTATOS</b></h1>
    <div className="row col-12 d-flex p-0 justify-content-center">
      <div className="col-md-5">
        <img className="img-fluid col-sm-3" src={iconInstagram} alt="icon instagram" />
      </div>

      <div className="row col-12 p-0">
        {/* component */}
        <div className="wsi-container-dark col-md-12 py-3">
          <h1><b>Envie uma mensagem</b></h1>

          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="SEU NOME"
          />

          <textarea
            type="text"
            className="form-control form-control-lg my-3"
            placeholder="SUA MENSAGEM"
            rows="5"
          />
          <br />
          <div className="d-flex justify-content-end">
            <button className="btn btn-lg btn-primary">ENVIAR</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PageLoginContatos;