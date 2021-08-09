import { serverAddress } from '@/util/Settings';
import axios from 'axios';
import Carregando from '@/pages/generic/Carregando';

const FormCategoria = (props) => {
  const [alertTipo, setAlertTipo] = React.useState('');
  const [alertMensagem, setAlertMensagem] = React.useState('');
  const [alertAtivo, setAlertAtivo] = React.useState(false);
  const [categoria, setCategoria] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [idCategoriaEditar, setIdCategoriaEditar] = React.useState(-1);
  const updateAlert = (type, msg) => {
    setAlertTipo(type);
    setAlertMensagem(msg);
    setAlertAtivo(true);
  };

  const registerCategoria = () => {
    setIsLoading(true);
    let request_method = '';
    let request_url = `${serverAddress}categoria/`;
    if (idCategoriaEditar > -1) {
      request_method = 'PUT';
      request_url += `${idCategoriaEditar}/`;
    } else {
      request_method = 'POST';
    }
    axios(
      {
        method: request_method,
        url: request_url,
        data: {
          nome: categoria,
        },
      },
    ).then((response) => {
      updateAlert('success', 'Categoria cadastrada com sucesso!');
      setCategoria('');
    }).catch((error) => {
      updateAlert('danger', 'Erro ao cadastrar categoria!');
    });
    setIsLoading(false);
  };

  React.useEffect(() => {
    if (props.idCategoriaEditar != -1) {
      updateAlert('warning', `Editando categoria: ${props.nomeCategoriaEditar}`);
      setIdCategoriaEditar(props.idCategoriaEditar);
      setCategoria(props.nomeCategoriaEditar);
    }
  }, [props.idCategoriaEditar]);

  if (isLoading) {
    return (
      <Carregando />
    );
  }
  return (
    <div className="wsi-bg-black rounded my-2 p-md-2">
      <h3 className="text-secondary">ADICIONAR NOVA CATEGORIA</h3>
      <div className="form-group row d-flex justify-content-between ">
        <div className="col-md-2">
          <label className="h2" htmlFor="nome">
            <b>Nome</b>
          </label>
        </div>
        <div className="col-md-10">
          <input
            className="form-control "
            type="text"
            name="nome"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value.toUpperCase())}
          />
        </div>
      </div>

      <div className="d-flex justify-content-end mt-3">
        <button
          className="btn btn-lg wsi-btn-secondary"
          onClick={registerCategoria}
        >
          SALVAR
        </button>
      </div>
      <div
        className={`my-2 alert alert-${alertTipo}`}
        role="alert"
        style={{ display: alertAtivo ? 'block' : 'none' }}
      >
        <h3>
          <strong>{alertMensagem}</strong>
        </h3>
      </div>
    </div>
  );
};

export default FormCategoria;
