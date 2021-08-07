import axios from 'axios';
import { serverAddress } from '@/util/Settings';
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
      <div className="my-2 px-2">
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
          {formAtivo
            ? (
              <FormAdicionarSerie
                setFormAtivo={setFormAtivo}
                adicionarSerie={adicionarSerie}
              />
            ) : null}
        </div>
      </div>
      <div className="my-2 px-2">
        <div>
          <table className="table table-bordered table-dark text-white">
            <thead>
              <tr className="table-primary">
                <th>EXERCICIO</th>
                <th>REPETIÇÕES</th>
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

        <div className="d-flex justify-content-between">
          <button
            className="btn btn-danger"
          >
            CANCELAR
          </button>
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
        { alertShow
          ? (
            <div className={`my-2 alert alert-${alertType}`}>
              <h4>{alertMessage}</h4>
            </div>
          ) : null}
      </div>
    </div>
  );
};

export default FormCadastroTreino;
