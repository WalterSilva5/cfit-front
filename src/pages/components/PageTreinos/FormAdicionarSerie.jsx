import BuscarExercicio from './BuscarExercicio';

const FormAdicionarSerie = (props) => {
  const [repeticoes, setRepeticoes] = React.useState(8);
  const [idExercicio, setIdExercicio] = React.useState(-1);
  const closeForm = () => {
    setRepeticoes(8);
    setIdExercicio(-1);
    props.setFormAtivo(false);
  };

  return (
    <div className="border border-secondary rounded p-2 my-2 col-12">
      <h4 className="text-center">ADICIONAR NOVA SERIE</h4>
      <div className="my-2">
        <div className="form-group d-flex my-4">
          <label htmlFor="repeticoes">
            Nº de Repetições:
            {' '}
          </label>
          <div className="col-xsm-4 col-sm-2 col-md-1">
            <input
              type="text"
              id="repeticoes"
              className="form-control"
              value={repeticoes}
              onChange={(e) => setRepeticoes(e.target.value)}
            />
          </div>
        </div>
        <div className="my-4">
          Exercicio:
          <BuscarExercicio
            setIdExercicio={setIdExercicio}
            idExercicio={idExercicio}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-danger"
          onClick={() => {
            closeForm();
          }}
        >
          CANCELAR
        </button>
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
      </div>
    </div>

  );
};

export default FormAdicionarSerie;
