import BuscarExercicio from './BuscarExercicio'


const FormAdicionarSerie = (props) => (
  <div className="border border-secondary rounded p-2 my-2 col-12">
    <h4 className="text-center">ADICIONAR NOVA SERIE</h4>
    <div className="my-2">
      <div className="form-group d-flex my-4">
        <label htmlFor="repeticoes">
          Nº de Repetições:
          {' '}
        </label>
        <div className="col-xsm-4 col-sm-2 col-md-1">
          <input type="text" id="repeticoes" className="form-control" />
        </div>
      </div>
      <div className="my-4">
        Exercicio:
        <BuscarExercicio />
      </div>
    </div>
    <div className="d-flex justify-content-between">
      <button className="btn btn-danger">CANCELAR</button>
      <button className="btn wsi-btn-secondary">ADICIONAR</button>
    </div>
  </div>

);

export default FormAdicionarSerie;
