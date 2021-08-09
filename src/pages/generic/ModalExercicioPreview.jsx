const ModalExercicioPreview = (props) => {
  const [imagem, setImagem] = React.useState('');
  React.useEffect(() => {
    if (props.exercicioPreview != "" && props.exercicioPreview) {
      setImagem(props.exercicioPreview);
    }
  }, [props.exercicioPreview]);

  const fecharModal = () => {
    props.setExercicioPreview("");
    setImagem('');
  };

  if (imagem != "") {
    return (
      <div
        className={` modal animate__animated d-block
          ${
            imagem !== ''
                  ? 'animate__fadeInLeft'
                  :'animate__fadeOutRight'

            }`}
      >
        <div
        
        style={{
          height: '100vh',
        }}
        className="modal-content wsi-container-dark wsi-border-primary wsi-shadow-primary blur">
          <div className="modal-header">
            <h5 className="modal-title text-center">
              <b>
                EXEMPLO
              </b>
            </h5>
            <button
              className="btn wsi-btn btn-danger btn-sm"
              type="button"
              onClick={() => {
                fecharModal();
              }}
            >
              FECHAR
            </button>
          </div>
          <div className="modal-body d-flex justify-content-center">
            <div className="image-preview">
              <img src={imagem} alt="Image Preview" className="img-fluid col-12 animate__animated animate__bounceIn" />
              <div className="d-flex justify-content-center mt-3">
                <button
                  className="btn wsi-btn-secondary"
                  onClick={() => {
                    fecharModal();
                  }}
                >
                  FECHAR EXEMPLO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else{
    return (<></>)
  }
};

export default ModalExercicioPreview;
