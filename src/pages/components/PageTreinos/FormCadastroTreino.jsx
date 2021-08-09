import axios from 'axios';
import { serverAddress } from '@/util/Settings';
import { NavLink } from 'react-router-dom';
import FormAdicionarSerie from './FormAdicionarSerie';

const FormCadastroTreino = () => {
  const [formAtivo, setFormAtivo] = React.useState(false);
  const [series, setSeries] = React.useState([]);
  const [serieAtual, setSerieAtual] = React.useState(null);
  const [exercicios, setExercicios] = React.useState([]);
  const [alertType, setAlertType] = React.useState('danger');
  const [alertMessage, setAlertMessage] = React.useState('');
  const [alertShow, setAlertShow] = React.useState(false);
  const [titulo, setTitulo] = React.useState('');
  const [dica, setDica] = React.useState('');
  const [botaoVisivel, setBotaoVisivel] = React.useState(false);
  let cont = 0;
  const getExercicios = () => {
    axios.get(`${serverAddress}exercicio/`)
      .then((response) => {
        setExercicios(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const limparTela = () => {
    setSerieAtual(null);
    setSeries([]);
    setTitulo('');
    setDica('');
    setFormAtivo(false);
  };
  const adicionarSerie = (serie) => {
    setSerieAtual(serie);
  };

  const updateAlert = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setAlertShow(true);
    setBotaoVisivel(true);
  };

  const adicionarTreino = () => {
    if (titulo.length === 0) {
      updateAlert('danger', 'ESCOLHA UM TITULO PARA O TREINO!');
    } else if (series.length === 0) {
      updateAlert('danger', 'ADICIONE SERIES AO TREINO!');
    } else {
      const method_request = '';
      const url_request = `${serverAddress}treino/`;
      const data = {
        titulo,
        series,
        dica,
      };
      axios(
        {
          method: 'post',
          url: url_request,
          data,
        },
      )
        .then((response) => {
          updateAlert('success', 'TREINO CADASTRADO COM SUCESSO!');
          setFormAtivo(false);
          limparTela();
        }).catch((error) => {
          updateAlert('danger', error.response.data.message);
        });
    }
  };

  React.useEffect(() => {
    if (serieAtual) {
      setSeries([...series, serieAtual]);
      setSerieAtual(null);
    }
  }, [series, serieAtual]);

  React.useEffect(() => {
    if (!exercicios || exercicios.length === 0) {
      getExercicios();
    }
  }, [exercicios]);

  return (
    <div>
      <div className="my-3 p-2">
        <label className="h4" htmlFor="titulo">TITULO DO TREINO</label>
        <input
          id="titulo"
          type="text"
          className="form-control"
          placeholder="Titulo do treino"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value.toUpperCase())}
        />
      </div>
      <div className="my-2 px-1">
        <div className="p-2">
          <div className="d-flex justify-content-between col-12">
            <h4>SERIES DO TREINO</h4>
            <button
              className="btn btn-primary"
              onClick={() => setFormAtivo(true)}
            >
              ADICIONAR SERIE
            </button>
          </div>
        </div>
        {formAtivo
          ? (
            <div
              style={{
                position: 'absolute',
                top: '-100px',
                left: '0',
                margin: '0 !important',
                padding: '0 !important',
                zIndex: '9999999',
              }}
              className="col-12"
            >
              <FormAdicionarSerie
                setFormAtivo={setFormAtivo}
                adicionarSerie={adicionarSerie}
              />

            </div>
          ) : null}
      </div>
      <div className="my-2 px-2">
        <div
          style={{
            maxHeight: '300px',
            overflowY: 'auto',
          }}
        >
          <table className="table table-bordered table-secondary">
            <thead>
              <tr className="table-primary">
                <th>EXERCICIO</th>
                <th className="col-1">REPETIÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {series.map((serie) => (
                <tr key={cont += 1}>
                  <td>
                    {
                     exercicios.find((exercicio) => exercicio.pk == serie.exercicio).nome
                    }
                  </td>
                  <td className="col-1">{serie.repeticoes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="my-3 p-2">
          <label htmlFor="dica" className="h4">DICA: </label>
          <textarea
            name="dica"
            value={dica}
            onChange={(e) => setDica(e.target.value)}
            className="textarea form-control"
          />
        </div>

        { alertShow
          ? (
            <div className={`my-3 alert alert-${alertType}`}>
              <h4>{alertMessage}</h4>
            </div>
          ) : null}

        <div className="d-flex justify-content-center p-2">
          <div className="rounded bg-secondary">
            <div className="row my-2">
              <button
                className="btn wsi-btn-secondary"
                onClick={() => {
                  setFormAtivo(false);
                  adicionarTreino();
                }}
              >
                SALVAR TREINO
              </button>
            </div>
            <div className="row my-2">
              <button
                className="btn btn-danger"
                onClick={() => {
                  limparTela();
                }}
              >
                CANCELAR
              </button>
            </div>
            <div className="row my-2">
              <NavLink className="btn btn-primary" to="/treinos">VOLTAR PRA TREINOS</NavLink>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCadastroTreino;
