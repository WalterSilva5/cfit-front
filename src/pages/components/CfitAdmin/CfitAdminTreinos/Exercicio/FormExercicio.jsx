const FormExercicio = () => (
    <div className="wsi-bg-black rounded my-2 p-md-2">
      <h3 className="text-secondary">ADICIONAR NOVO EXERCICIO</h3>
      <div className="form-group row">
        <div className="col-md-2">
          <label className="h2"><b>Nome</b></label>
        </div>
        <div className="col-md-10">
          <input className="form-control " type="text" name="nome" />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-md-2">
          <label className="h2"><b>Video</b></label>
        </div>
        <div className="col-md-10">
          <input className="form-control " type="text" name="video" />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-md-2">
          <label className="h2"><b>Dica</b></label>
        </div>
        <div className="col-md-10 mb-2">
          <textarea className="form-control " type="text" name="video" />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-md-3">
          <label className="h2"><b>Categoria</b></label>
        </div>
        <div className="col-md-9 mb-2">
          <select name="categoria" id="categoria" className="form-control">
            <option value="">Selecione</option>
            <option value="1">Aeromodelismo</option>
            <option value="2">Aeromodelo</option>
          </select>
        </div>
      </div>
      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-lg wsi-btn-secondary">SALVAR</button>
      </div>
    </div>
  );
  
  export default FormExercicio;