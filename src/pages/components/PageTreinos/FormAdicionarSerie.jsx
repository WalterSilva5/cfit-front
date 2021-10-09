import BuscarExercicio from './BuscarExercicio';

const FormAdicionarSerie = (props) => {
  const [repeticoes, setRepeticoes] = React.useState('4-Series // 10-Repetições');
  const [idExercicio, setIdExercicio] = React.useState(-1);
  const [alertType, setAlertType] = React.useState('success');
  const [alertMessage, setAlertMessage] = React.useState('');
  const [alertShow, setAlertShow] = React.useState(false);
  const closeForm = () => {
    setRepeticoes(8);
    setIdExercicio(-1);
    props.setFormAtivo(false);
    setAlertShow(false);
    setAlertMessage('');
  };

  const updateAlert = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setAlertShow(true);
  };
  React.useEffect(() => {
    if (idExercicio !== -1) {
      props.adicionarSerie({ exercicio: idExercicio, repeticoes });
      closeForm();
    }
  }, [idExercicio]);
    
  return (
    <div
      className="border border-secondary rounded my-3 col-12"
      style={{
        backgroundColor: '#02021f',
        height: '160vh',
      }}
    >
      <h4 className="text-center">ADICIONAR NOVA SERIE</h4>
      <div className="my-2">
        <div
          className="my-4 mx-0"
        >
          Exercicio:
          <BuscarExercicio
            setIdExercicio={setIdExercicio}
            idExercicio={idExercicio}
          />
        </div>
      </div>

      <div className="form-group my-4 d-flex justify-content-center">
        <label htmlFor="repeticoes">
          Repetições:
          {' '}
        </label>
        <div className="col-8 col-sm-4 col-md-3 mx-2">
          <input
            type="text"
            id="repeticoes"
            className="form-control"
            value={repeticoes}
            onChange={(e) => setRepeticoes(e.target.value)}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center p-2">
        <div className="rounded bg-secondary">
          {/* <div className="row my-3">
            <button
              className="btn wsi-btn-secondary"
              onClick={() => {
                if (idExercicio > -1) {
                  props.adicionarSerie({ exercicio: idExercicio, repeticoes });
                  closeForm();
                }
              }}
            >
              ADICIONAR
            </button>
          </div> */}
          <div className="row my-3">
            <button
              className="btn btn-danger"
              onClick={() => {
                closeForm();
              }}
            >
              CANCELAR
            </button>
          </div>
          <div
            className={`alert alert-${alertType}`}
            style={{ display: alertShow ? 'block' : 'none' }}
          >
            <h4>
              {alertMessage}
            </h4>
          </div>
        </div>
      </div>
    </div>

  );
};

export default FormAdicionarSerie;
