const ModalConfirmDelete = (props) => {
  const [modalVisivel, setModalVisivel] = React.useState(false);

  React.useEffect(() => {
    if (props.modalConfirmdeleteVisivel) {
      setModalVisivel(true);
    }
  }, [props.modalConfirmdeleteVisivel]);

  if (modalVisivel) {
    return (

      <div
        className={` modal animate__animated d-block
          ${
            !props.modalConfirmdeleteVisivel ? 'animate__fadeOutRight' : 'animate__fadeInLeft'
          }`}
      >
        <div>
          <div
            className="modal-dialog modal-lg"
            role="document"
            style={{ width: '100%' }}
          >
            <div className="modal-content wsi-container-dark wsi-border-primary wsi-shadow-primary blur">
              <div className="modal-header">
                <h5 className="modal-title text-center">
                  <b>
                    {' '}
                    DESEJA EXCLUIR
                    {props.campo}
                    ?
                  </b>
                </h5>
                <button
                  className="btn wsi-btn btn-danger btn-sm"
                  type="button"
                  onClick={() => {
                    props.setModalConfirmDeleteVisivel(false);
                  }}
                >
                  FECHAR
                </button>
              </div>
              <div className="modal-body d-flex justify-content-between">
                <button className="btn btn-danger" onClick={()=>{props.setConfirmDel(true)}}>CONFIRMAR</button>
                <button className="btn wsi-btn-secondary" onClick={()=>{
                    props.setModalConfirmDeleteVisivel(false)
                }}>CANCELAR</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
};

export default ModalConfirmDelete;
