/* eslint-disable react/prop-types */
const PageLoginModalCadastro = (props) => (
  <div>
    <div className="modal-dialog modal-lg  " role="document" style={{ width: '100%' }}>
      <div className="modal-content wsi-container-dark wsi-border-primary wsi-shadow-primary blur">
        <div className="modal-header">
          <h5 className="modal-title text-center"><b>CADASTRE-SE</b></h5>
          <button
            className="btn wsi-btn btn-danger btn-sm"
            type="button"
            onClick={() => {
              props.setmodalVisible(false);
            }}
          >
            FECHAR
          </button>
        </div>
        <div className="modal-body">
          <input type="text" className="form-control my-3 wsi-shadow-light" placeholder="TELEFONE OU EMAIL" />
          <input type="text" className="form-control my-3 wsi-shadow-light" placeholder="NOME" />
          <input type="text" className="form-control my-3 wsi-shadow-light" placeholder="SENHA" />
          <button className="btn btn-primary wsi-shadow-primary">CADASTRAR</button>

          <div className="mt-5">
            <p>
              Ja possui cadastro?
              {' '}
              <button className="btn wsi-btn-secondary wsi-shadow-light btn-sm">FAZER LOGIN</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default PageLoginModalCadastro;
