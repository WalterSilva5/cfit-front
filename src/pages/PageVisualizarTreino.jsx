import axios from 'axios';
import { serverAddress } from '@/util/Settings';
import { useParams, NavLink } from 'react-router-dom';
import PageHeader from '@/pages/components/PageHeader';
import Carregando from '@/pages/components/Carregando';
import ModalConfirmDelete from './components/ModalConfirmDelete';
import ModalEnviarTreino from './components/PageTreinos/ModalEnviarTreino';

const PageVisualizarTreino = (props) => {
  const token = localStorage.getItem('authToken');
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  const [treino, setTreino] = React.useState(null);
  const [series, setSeries] = React.useState(null);
  const [treino_id, setTreino_id] = React.useState(-1);
  const [carregando, setCarregando] = React.useState(true);
  const [exercicios, setExercicios] = React.useState([]);
  const [videoAtual, setVideoAtual] = React.useState('');
  const [confirmDelTreino, setConfirmDel] = React.useState(false);
  const [modalConfirmdeleteVisivel, setModalConfirmDeleteVisivel] = React.useState(false);
  const [modalEnviarParaAmigoVisivel, setModalEnviarParaAmigoVisivel] = React.useState(false);
  const params = useParams();

  const getExercicios = () => {
    axios.get(`${serverAddress}exercicio/`)
      .then((response) => {
        setExercicios(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const getTreino = () => {
    axios
      .get(`${serverAddress}treino/${treino_id}`)
      .then((response) => {
        setTreino(response.data);
      }).catch((error) => {
        console.log(error.response);
      });
  };

  const deleteTreino = () => {
    axios.delete(`${serverAddress}treino/${treino_id}`)
      .then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.log(error.response);
      });
  };

  React.useEffect(() => {
    if (exercicios.length == 0) {
      getExercicios();
    }
  }, [exercicios]);

  const getSeries = () => {
    axios
      .get(
        `${serverAddress}serie/serie_por_treino?treino_id=${treino_id}`,
      )
      .then((response) => {
        setSeries(response.data);
      }).catch((error) => {
        console.log(error);
      });
  };

  const printPage = () => {
    const atual = document.body.innerHTML;
    document.body.innerHTML = document.getElementById('lista-de-treinos').innerHTML;
    window.print();
    document.body.innerHTML = atual;
    return false;
  };
  React.useEffect(() => {
    if (treino_id != -1 && treino_id != null) {
      getTreino();
    }
  }, [treino_id]);

  React.useEffect(() => {
    try{
      if (treino_id != -1 && treino_id != null && series == null) {
        getSeries();
      } else if (series != null && treino.titulo != null) {
        setCarregando(false);
        // setVideoAtual(getVideoUrl(series[0].exercicio_id));
      }
    } catch (e) {
      getTreino();
    }
  }, [treino_id, series, treino]);

  const getVideoUrl = (videoId) => exercicios.find((ex) => ex.pk == videoId).video;

  React.useEffect(() => {
    if (videoAtual != null && videoAtual != undefined) {
      setVideoAtual(videoAtual);
    }
  }, [videoAtual]);

  React.useEffect(() => {
    if (params.id) {
      setTreino_id(params.id);
    }
  }, [params]);

  React.useEffect(() => {
    if (confirmDelTreino) {
      deleteTreino();
      setModalConfirmDeleteVisivel(false);
      setConfirmDel(false);
      setTimeout(() => {
        window.location.href = '/treinos';
      }, 1000);
    }
  }, [confirmDelTreino]);

  if (carregando) {
    return (
      <Carregando />
    );
  } else if (series != null && treino != null) {
    return (
      <div>
        <PageHeader />
        <h3 className="text-center display-5">
          TREINO:
          {' '}
          {
              treino != null
                ? (
                  <span>
                    {treino.titulo}
                  </span>
                ) : <></>
            }
        </h3>
        <div className="d-flex justify-content-center my-4">
          <div className="p-2 border wsi-border rounded py-3 my-2 col-md-6">
            <div className="d-flex justify-content-center">
              <img
                src={videoAtual}
                alt=""
                className="img-fluid col-12 animate__animated animate__bounceIn"
                style={{
                  maxWidth: '400px',
                  display: videoAtual != '' ? 'block' : 'none',
                }}
              />
            </div>
            <div id="lista-de-treinos">
              {series.map((serie) => (
                <div
                  key={serie.pk}
                  className="border border-secundary rounded my-2 py-3 px-2"
                >
                  <div>
                    <h4>
                      EXERCICIO:
                      {' '}
                      {exercicios.find((ex) => ex.pk == serie.exercicio_id).nome}
                    </h4>
                  </div>

                  <div>
                    <h4>
                      Repetições:
                      {' '}
                      {serie.repeticoes}
                    </h4>
                  </div>
                  <div>
                    <h5>
                      Dica:
                      {' '}
                      {serie.dica}
                    </h5>
                  </div>
                  <div className="d-flex">
                    <h4>
                      Video:
                      {' '}
                    </h4>
                    <button
                      className="btn btn-primary mx-3"
                      onClick={() => {
                        setVideoAtual(getVideoUrl(serie.exercicio_id));
                        window.scrollTo(0, 0);
                      }}
                    >
                      VISUALIZAR
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {treino.dica != null && treino.dica != '' ? (
              <div>
                <h3>Dica:</h3>
                {treino.dica}
              </div>
            ) : ''}

            <div className="d-flex justify-content-center p-2">
              <div className="rounded bg-secondary">
                <div className="row my-3">
                  <button
                    className="btn wsi-btn-secondary"
                    onClick={() => {
                      setModalEnviarParaAmigoVisivel(true);
                    }}
                  >
                    ENVIAR PARA AMIGO
                  </button>
                </div>
                <div className="row my-3">
                  <button
                    className="btn btn-info"
                    onClick={() => {
                      printPage();
                    }}
                  >
                    BAIXAR TREINO
                  </button>
                </div>
                <div className="row my-3">
                  <NavLink className="btn btn-primary" to="/treinos">VOLTAR PRA TREINOS</NavLink>
                </div>
                <div className="row mt-5">
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      setModalConfirmDeleteVisivel(true);
                    }}
                  >
                    DELETAR
                  </button>
                </div>
              </div>
            </div>
            <ModalConfirmDelete
              campo=" ESTE TREINO"
              setConfirmDel={setConfirmDel}
              setModalConfirmDeleteVisivel={setModalConfirmDeleteVisivel}
              modalConfirmdeleteVisivel={modalConfirmdeleteVisivel}
            />
            <ModalEnviarTreino
              treino={treino}
              setModalEnviarParaAmigoVisivel={setModalEnviarParaAmigoVisivel}
              modalEnviarParaAmigoVisivel={modalEnviarParaAmigoVisivel}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default PageVisualizarTreino;
