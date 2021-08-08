import axios from 'axios';
import { serverAddress } from '@/util/Settings';

const FormExercicio = (props) => {
  const [categorias, setCategorias] = React.useState([]);
  const [categoriaId, setCategoriaId] = React.useState(-1);
  const [nome, setNome] = React.useState('');
  const [video, setVideo] = React.useState('');
  const [dica, setDica] = React.useState('');
  const [exercicioEditId, setExercicioEditId] = React.useState(-1);
  const [alertType, setAlertType] = React.useState('success');
  const [alertMessage, setAlertMessage] = React.useState('');
  const [alertShow, setAlertShow] = React.useState(false);
  const [categoriaEscolhida, setCategoriaEscolhida] = React.useState('');
  const updateAlert = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setAlertShow(true);
  };

  const getCategorias = () => {
    axios.get(`${serverAddress}categoria/`)
      .then((response) => {
        setCategorias(
          response.data,
        );
      })
      .catch((error) => {
        updateAlert('danger', error.response.data.message);
      });
  };

  const getExercicioEdit = () => {
    if (exercicioEditId > 0) {
      axios.get(`${serverAddress}exercicio/${exercicioEditId}/`)
        .then((response) => {
          setNome(response.data.nome);
          setVideo(response.data.video);
          setDica(response.data.dica);
          setCategoriaId(response.data.categoria);
        })
        .catch((error) => {
          updateAlert('danger', error.response.data.message);
        });
    }
  };

  const salvarExercicio = () => {
    let request_method = '';
    let request_url = `${serverAddress}exercicio/`;
    if (exercicioEditId === -1) {
      request_method = 'post';
    } else {
      request_method = 'put';
      request_url += `${exercicioEditId}/`;
    }
    if (nome.length === 0) {
      updateAlert('danger', 'Nome não pode ser vazio');
    } else if (video.length === 0) {
      updateAlert('danger', 'Video não pode ser vazio');
    } else if (categoriaId == -1) {
      updateAlert('danger', 'Selecione uma categoria');
    } else {
      axios({
        method: request_method,
        url: request_url,
        data: {
          nome,
          video,
          dica,
          categoria: categoriaId,
        },
      })
        .then((response) => {
          setNome('');
          setVideo('');
          setDica('');
          setCategoriaId(-1);
          setExercicioEditId(-1);
          setCategoriaEscolhida('ESCOLHA UMA CATEGORIA');
          updateAlert('success', 'Exercício salvo com sucesso!');
          props.setExercicioEditId(-1);
        })
        .catch((error) => {
          console.log(error);
          updateAlert('danger', 'Ocorreu um erro ao salvar o exercício!');
        });
    }
  };

  React.useEffect(() => {
    if (exercicioEditId !== -1) {
      getExercicioEdit();
    }
  }, [exercicioEditId]);

  React.useEffect(() => {
    if (props.exercicioEditId !== -1 && !isNaN(props.exercicioEditId)) {
      setExercicioEditId(props.exercicioEditId);
    }
  }, [props.exercicioEditId]);

  React.useEffect(() => {
    if (categorias.length === 0) {
      getCategorias();
    }
  }, [categorias]);

  React.useEffect(() => {
    if (categoriaId != -1 && categoriaId != undefined) {
      try {
        const teste = categorias.find((categoria) => categoria.pk == categoriaId).nome;
        setCategoriaEscolhida(teste);
      } catch (e) {
        setCategoriaId(-1);
      }
    } else {
      setCategoriaEscolhida('ESCOLHA UMA CATEGORIA');
    }
  }, [categoriaId, categorias]);

  return (
    <div className="wsi-bg-black rounded my-2 p-md-2">
      <h3 className="text-secondary">ADICIONAR NOVO EXERCICIO</h3>
      <div className="form-group row">
        <div className="col-md-2">
          <label className="h2"><b>Nome</b></label>
        </div>
        <div className="col-md-10">
          <input
            className="form-control"
            onChange={(e) => setNome(e.target.value.toUpperCase())}
            value={nome}
            type="text"
            name="nome"
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-md-2">
          <label className="h2"><b>Video</b></label>
        </div>
        <div className="col-md-10">
          <input
            className="form-control"
            onChange={(e) => setVideo(e.target.value)}
            value={video}
            type="text"
            name="video"
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-md-2">
          <label className="h2"><b>Dica</b></label>
        </div>
        <div className="col-md-10 mb-2">
          <textarea
            className="form-control"
            onChange={(e) => setDica(e.target.value.toUpperCase())}
            value={dica}
            type="text"
            name="video"
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-md-3">
          <label className="h2"><b>Categoria</b></label>
        </div>
        <div className="col-md-9 mb-2">
          <select
            name="categoria"
            id="categoria"
            className="form-control"
            onChange={(e) => {
              setCategoriaId(e.target.value);
            }}
          >
            <option>
              {
              categoriaEscolhida
            }
            </option>
            {categorias.map((categoria) => (
              <option key={categoria.pk} value={categoria.pk}>
                {categoriaEscolhida == '' ? categoriaEscolhida : categoria.nome}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="d-flex justify-content-end mt-3">
        <button
          className="btn btn-lg wsi-btn-secondary"
          onClick={() => {
            salvarExercicio();
          }}
        >
          SALVAR
        </button>
      </div>
      <div
        className={`my-2 alert alert-${alertType}`}
        role="alert"
        style={{ display: alertShow ? 'block' : 'none' }}
      >
        <h4>
          {alertMessage}
        </h4>
      </div>
    </div>
  );
};

export default FormExercicio;
