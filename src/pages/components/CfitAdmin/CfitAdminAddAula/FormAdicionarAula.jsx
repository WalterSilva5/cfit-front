import axios from "axios";
import { serverAddress } from "@/util/Settings";
import { logoutUser } from "@/util/UserUtil";
import { useParams } from "react-router-dom";
const FormAdicionarAula = (props) => {
  const token = localStorage.getItem("authToken");
  axios.defaults.headers.common = { Authorization: "Bearer " + token };

  const [titulo, setTitulo] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [playlistId, setPlaylistId] = React.useState(-1);
  const [tipoAlerta, setTipoAlerta] = React.useState("success");
  const [alertaAdicionarAula, setAlertaAdicionarAula] = React.useState(false);
  const [mensagemAdicionarAula, setMensagemAdicionarAula] = React.useState("");
  const [playlists, setplaylists] = React.useState([]);
  const [listaPlaylists, setListaPlaylists] = React.useState({});
  const [isCarregando, setCarregando] = React.useState(true);
  const [videoPk, setVideoPk] = React.useState(-1);
  const [permiteDeletar, setPermiteDeletar] = React.useState(false);
  const params = useParams();

  React.useEffect(() => {
    if (params.id) {
      axios.get(`${serverAddress}video/${params.id}`).then((response) => {
        setTitulo(response.data.titulo);
        setUrl(response.data.url);
        setPlaylistId(response.data.playlist_id);
        setVideoPk(response.data.pk);
      });
    }
  }, [params]);

  const deleteAula = () => {
    setAlertaAdicionarAula(true);
    if (!permiteDeletar) {
      setTipoAlerta("warning");
      setMensagemAdicionarAula("MARQUE A CAIXA PRA CONFIRMAR ANTES DE DELETAR");
    } else {
      axios
        .delete(`${serverAddress}video/${params.id}`)
        .then((response) => {
          setTipoAlerta("success");
          setMensagemAdicionarAula("Aula removida com sucesso");
        })
        .catch((error) => {
          setTipoAlerta("danger");
          setMensagemAdicionarAula("Não foi possível remover aula");
        });
    }
  };

  const getPlaylists = () => {
    axios
      .get(`${serverAddress}playlist/`, { crossDomain: true })
      .then((response) => {
        setListaPlaylists(response.data);
        setplaylists(
          response.data.map((res) => (
            <option key={res.pk} value={res.pk}>
              {res.titulo}
            </option>
          ))
        );
        setCarregando(false);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          logoutUser();
        }
      });
  };
 

  const salvarVideo = () => {
    setAlertaAdicionarAula(true);
    let request_method = "";
    let request_url = "";
    let request_data = {
      titulo: titulo,
      url: url,
      pk: videoPk,
      playlist_id: playlistId,
    };

    const clearData = () => {
      setTitulo("");
      setUrl("");
      setPlaylistId(-1);
    };


    if (videoPk == -1) {
      request_method = "post";
      request_url = `${serverAddress}video/`;
    } else {
      request_url = `${serverAddress}video/${videoPk}/`;
      request_method = "put";
    }
    if (playlistId == -1) {
      setTipoAlerta("warning");
      setMensagemAdicionarAula("Selecione uma playlist");
    } else if (titulo == "" || url == "") {
      setTipoAlerta("warning");
      setMensagemAdicionarAula("Todos os campos são obrigatórios");
    } else {
      axios(
        {
          method: request_method,
          url: request_url,
          data: request_data,
        },
        { crossDomain: true }
      )
        .then((response) => {
          setTipoAlerta("success");
          clearData();
          if (response.status === 201 || response.status === 200) {
            if (request_method == "post") {
            setMensagemAdicionarAula("Aula adicionada com sucesso!");
            } else {
            setMensagemAdicionarAula("Aula alterada com sucesso!");
            }
          } else {
            setMensagemAdicionarAula("Sucesso ao adicionar aula!");
          }
        })
        .catch((err) => {
          setTipoAlerta("danger");
          console.log(err)
          if (err.response.status === 400) {
            setMensagemAdicionarAula("Erro ao adicionar aula!");
          } else if (err.response.status === 500) {
            setMensagemAdicionarAula("Erro no servidor!");
          } else {
            setMensagemAdicionarAula("Erro desconhecido!");
          }
        });
    }
  };

  React.useEffect(() => {
    if (playlists.length == 0) {
      getPlaylists();
    }
  }, []);
  if (isCarregando) {
    return (
      <div>
        <h1>Carregando...</h1>
      </div>
    );
  }
  return (
    <div className="p-2">
      <div
        className="rounded wsi-container-dark"
        style={{ minHeight: "70vh" }}
      >
        <div className="d-flex justify-content-center">
          <div className="col-lg-10 col-sm-12 my-4 p-2 border border-secondary rounded">
            <div className="form-group mb-2">
              <label htmlFor="titulo" className="h2">
                Titulo:
              </label>
              <input
                type="text"
                id="titulo"
                className="form-control"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="link" className="h2">
                Link:
              </label>
              <input
                type="text"
                id="link"
                className="form-control"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="playlist" className="h2">
                Playlist:
              </label>
              <select
                name="playlist"
                id="playlist"
                className="form-control"
                onChange={(e) => setPlaylistId(e.target.value)}
              >
                {playlistId ==-1? <option> ESCOLHA UMA PLAYLIST </option> :null}
                {playlists}
              </select>
            </div>
            <div className="d-flex justify-content-between">
              <button
                className="btn wsi-btn-secondary my-2"
                onClick={() => {
                  salvarVideo();
                }}
              >
                SALVAR
              </button>
              {videoPk != -1 ? (
                <div>
                  <span>Confirma?</span>
                  <input
                    className="form-check-input mx-3 mt-2"
                    onChange={(e) => {
                      setPermiteDeletar(e.target.checked);
                    }}
                    type="checkbox"
                    value={permiteDeletar}
                    id="flexCheckDefault"
                  />
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteAula();
                    }}
                  >
                    DELETAR AULA
                  </button>
                </div>
              ) : null}
            </div>
            {alertaAdicionarAula ? (
              <div
                id="alerta_adicionar_aula"
                className={`my-3 alert alert-${tipoAlerta}`}
              >
                <h5>{mensagemAdicionarAula}</h5>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAdicionarAula;
