import axios from 'axios';
import { serverAddress } from '@/util/Settings';

const ModalEnviarTreino = (props) => {
  const [modalVisivel, setModalVisivel] = React.useState(false);
  const [treino, setTreino] = React.useState(null);
  const [alertType, setAlertType] = React.useState('success');
  const [alertMessage, setAlertMessage] = React.useState('');
  const [alertShow, setAlertShow] = React.useState(false);
  const [telefone, setTelefone] = React.useState('');

  const updateAlert = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setAlertShow(true);
  };

  const enviarTreino = () => {
    axios.post(`${serverAddress}treino/enviar_treino/`, { treino, telefone })
      .then((response) => {
        updateAlert('success', 'Treino enviado com sucesso!');
        setTelefone('');
      })
      .catch((error) => {
        updateAlert('danger', error.response.data.message);
      });
  };

  React.useEffect(() => {
    if (props.treino !== null) {
      setTreino(props.treino);
    }
  }, [props.treino]);

  React.useEffect(() => {
    if (props.modalEnviarParaAmigoVisivel) {
      setModalVisivel(true);
      setTelefone('');
      setAlertMessage('');
      setAlertShow(false);
    }
  }, [props.modalEnviarParaAmigoVisivel]);

  if (modalVisivel) {
    return (

      <div
        className={` modal animate__animated d-block
            ${
              !props.modalEnviarParaAmigoVisivel ? 'animate__fadeOutRight' : 'animate__fadeInLeft'
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
                    Envie o treino para um amigo
                  </b>
                </h5>
                <button
                  className="btn wsi-btn btn-danger btn-sm"
                  type="button"
                  onClick={() => {
                    props.setModalEnviarParaAmigoVisivel(false);
                  }}
                >
                  FECHAR
                </button>
              </div>
              <div className="p-2 my-3">
                <label className="h4 mb-4">Numero de telefone do amigo</label>
                <input
                  type="text"
                  className="form-control"
                  value={telefone}
                  onChange={(e) => {
                    setTelefone(!isNaN(e.target.value) ? e.target.value : telefone);
                  }}
                />
              </div>
              <div className="p-2">

                <div className={`py-2 my-2 alert alert-${alertType}`}
                style={{ display: alertShow ? 'block' : 'none' }}
                >
                  <h4>{alertMessage}</h4>
                </div>
              </div>
              <div className="modal-body d-flex justify-content-between">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    props.setModalEnviarParaAmigoVisivel(false);
                  }}
                >
                  CANCELAR
                </button>
                <button
                  className="btn wsi-btn-secondary"
                  onClick={() => {
                    enviarTreino();
                  }}
                >
                  CONFIRMAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
};

export default ModalEnviarTreino;
