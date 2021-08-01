const FormCategoria = () => (
  <div className="wsi-bg-black rounded my-2 p-md-2">
    <h3 className="text-secondary">ADICIONAR NOVA CATEGORIA</h3>
    <div className="form-group row d-flex justify-content-between ">
      <div className="col-md-2">
        <label className="h2"><b>Nome</b></label>
      </div>
      <div className="col-md-10">
        <input className="form-control " type="text" name="nome" />
      </div>
    </div>
    
    <div className="d-flex justify-content-end mt-3">
      <button className="btn btn-lg wsi-btn-secondary">SALVAR</button>
    </div>
  </div>
);

export default FormCategoria;