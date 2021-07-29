/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
import axios from "axios";
import { serverAddress } from "@/util/Settings";

const ModalAdicionarPlaylist = (props) => {
  const token = localStorage.getItem("authToken");
  axios.defaults.headers.common = { Authorization: "Bearer " + token };
  const [titulo, settitulo] = React.useState("");
  const [descricao, setdescricao] = React.useState("");
  const [imagem, setimagem] = React.useState("");
  const [playlistId, setPlaylistId] = React.useState(props.playlistIdEditar);
  const [alert_adicionar_editar_playlist, set_alert_adicionar_editar_playlist] =
    React.useState(false);
  const [tipo_alert, set_tipo_alert] = React.useState("");
  const [sucesso_erro_mensagem, set_sucesso_erro_mensagem] = React.useState("");

  const resetData = () => {
    settitulo("");
    setdescricao("");
    setimagem("");
    set_tipo_alert("");
    set_sucesso_erro_mensagem("");
    set_alert_adicionar_editar_playlist(false);
  };

  const salvarPlaylist = () => {
    let request_method = "";
    let editar_playlist = "";
    if (playlistId != -1) {
      editar_playlist = playlistId + "/";
      request_method = "put";
    } else {
      request_method = "post";
    }
    set_alert_adicionar_editar_playlist(true);
    axios({
      method: request_method,
      url: `${serverAddress}playlist/${editar_playlist}`,
      data: { titulo, descricao, imagem },
    })
      .then((result) => {
        console.log(result);
        if (result.status == 201 || result.status == 200) {
          set_sucesso_erro_mensagem("Playlist salva com sucesso!");
          set_tipo_alert("success");
        } else {
          set_sucesso_erro_mensagem("Ocorreu um erro ao salvar a playlist.");
          set_tipo_alert("danger");
        }
      })
      .catch((result) => {
        console.log(result);
        set_sucesso_erro_mensagem("Ocorreu um erro ao salvar a playlist.");
        set_tipo_alert("danger");
      });
  };

  const deletarPlaylist = () => {
    set_alert_adicionar_editar_playlist(true);
    axios({
      method: "delete",
      url: `${serverAddress}playlist/${playlistId}/`,
    })
      .then((result) => {
        console.log(result);
        if (result.status == 204) {
          set_sucesso_erro_mensagem("Playlist deletada com sucesso!");
          set_tipo_alert("success");
        } else {
          set_sucesso_erro_mensagem("Ocorreu um erro ao deletar a playlist.");
          set_tipo_alert("danger");
        }
      })
      .catch((error) => {
        console.log("err " + result);
        set_sucesso_erro_mensagem("Ocorreu um erro ao deletar a playlist.");
        set_tipo_alert("danger");
      });
  };

  const setCampos = (props) => {
    settitulo(props.titulo);
    setdescricao(props.descricao);
    setimagem(props.imagem);
    setPlaylistId(props.pk);
  };
  const getPlaylists = () => {
    try {
      axios
        .get(`${serverAddress}playlist/${props.playlistIdEditar}`)
        .then((response) => {
          setCampos(response.data);
        })
        .catch(() => {
          settitulo("");
          setdescricao("");
          setimagem("");
          setPlaylistId(-1);
        });
    } catch (e) {
      setcampos({ titulo: "", descricao: "", imagem: "" });
    }
  };

  React.useEffect(() => {
    getPlaylists();
  }, [props.playlistIdEditar]);
  return (
    <div>
      <div
        className="modal-dialog modal-lg  "
        role="document"
        style={{ width: "100%" }}
      >
        <div className="modal-content wsi-container-dark wsi-border-primary wsi-shadow-primary blur">
          <div className="modal-header">
            <h5 className="modal-title text-center">
              <b>
                {playlistId == -1 ? "CADASTRAR NOVA " : "EDITAR "}
                PLAYLIST
              </b>
            </h5>
            <button
              className="btn wsi-btn btn-danger btn-sm"
              type="button"
              onClick={() => {
                props.setplaylistIdEditar(-1);
                resetData();
                window.location.href = "/cfit_admin/playlists";
              }}
            >
              FECHAR
            </button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              className="form-control my-3 wsi-shadow-light"
              placeholder="TITULO"
              value={playlistId}
              onChange={(e) => settitulo(e.target.value)}
              hidden
            />
            <input
              type="text"
              className="form-control my-3 wsi-shadow-light"
              placeholder="TITULO"
              value={titulo}
              onChange={(e) => settitulo(e.target.value)}
            />
            <input
              type="text"
              className="form-control my-3 wsi-shadow-light"
              placeholder="DESCRICAO"
              value={descricao}
              onChange={(e) => setdescricao(e.target.value)}
            />
            <input
              type="text"
              className="form-control my-3 wsi-shadow-light"
              placeholder="IMAGEM"
              value={imagem}
              onChange={(e) => setimagem(e.target.value)}
            />
            <div className="d-flex justify-content-between">
              <button
                className="btn wsi-btn-admin wsi-shadow-light"
                onClick={() => {
                  salvarPlaylist();
                }}
              >
                {playlistId == -1 ? "CADASTRAR" : "SALVAR"}
              </button>
              {playlistId != -1 ? (
                <button
                  className="btn btn-danger wsi-shadow-light"
                  onClick={() => {
                    deletarPlaylist();
                  }}
                >
                  DELETAR PLAYLIST
                </button>
              ) : null}
            </div>
            {alert_adicionar_editar_playlist ? (
              <div className={`mt-3 alert alert-${tipo_alert}`}>
                <h5>{sucesso_erro_mensagem}</h5>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAdicionarPlaylist;
