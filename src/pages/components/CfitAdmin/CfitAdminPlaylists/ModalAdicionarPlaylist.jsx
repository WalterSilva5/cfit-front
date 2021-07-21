/* eslint-disable no-undef */
const ModalAdicionarPlaylist = (props) => {
  const [titulo, settitulo] = React.useState('');
  const [descricao, setdescricao] = React.useState('');
  const [imagem, setimagem] = React.useState('');
  return (
    <div>
      <div
        className="modal-dialog modal-lg  "
        role="document"
        style={{ width: '100%' }}
      >
        <div className="modal-content wsi-container-dark wsi-border-primary wsi-shadow-primary blur">
          <div className="modal-header">
            <h5 className="modal-title text-center">
              <b>CADASTRAR NOVA PLAYLIST</b>
            </h5>
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
            <input
              type="text"
              className="form-control my-3 wsi-shadow-light"
              placeholder="TITULO"
              value={titulo}
              onChange={(e) => settitulo(e.target.value)}
            />
            <input
              type="text"
              className="form-control my-3 wsi-shadow-light"
              placeholder="DESCRICAO"
              value={descricao}
              onChange={(e) => setdescricao(e.target.value)}
            />
            <input
              type="text"
              className="form-control my-3 wsi-shadow-light"
              placeholder="IMAGEM"
              value={imagem}
              onChange={(e) => setimagem(e.target.value)}
            />

            <button
              className="btn btn-primary wsi-shadow-primary"
            >
              CADASTRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAdicionarPlaylist;
