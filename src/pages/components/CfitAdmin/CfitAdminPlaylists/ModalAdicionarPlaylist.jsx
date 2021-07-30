/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
import axios from "axios";
import { serverAddress } from "@/util/Settings";
import TabelaDeAulas from "./TabelaDeAulas";
const ModalAdicionarPlaylist = (props) => {
  const token = localStorage.getItem("authToken");
  axios.defaults.headers.common = { Authorization: "Bearer " + token };
  const [titulo, settitulo] = React.useState("");
  const [playlistId, setPlaylistId] = React.useState(-1);
  const [descricao, setdescricao] = React.useState("");
  const [imagem, setimagem] = React.useState("");
  const [alert_adicionar_editar_playlist, set_alert_adicionar_editar_playlist] =
    React.useState(false);
  const [tipo_alert, set_tipo_alert] = React.useState("");
  const [sucesso_erro_mensagem, set_sucesso_erro_mensagem] = React.useState("");
  const [permiteDeletar, setPermiteDeletar] = React.useState(false);

  const resetData = () => {
    props.setplaylistIdEditar(-1);
    setPlaylistId(-1);
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
      url= `${serverAddress}playlist/${editar_playlist}`,
      request_method = "put";
    } else {
      request_method = "post";
      url = `${serverAddress}playlist/`;
    }
    set_alert_adicionar_editar_playlist(true);
    axios({
      url: url,
      method: request_method,
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
    if (!permiteDeletar) {
      set_tipo_alert("warning");
      set_sucesso_erro_mensagem(
        "MARQUE A CAIXA PRA CONFIRMAR ANTES DE DELETAR"
      );
    } else {
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
    }
  };

  const setCampos = (result) => {
    settitulo(result.titulo);
    setdescricao(result.descricao);
    setimagem(result.imagem);
  };
  const getPLaylist = () => {
    if(playlistId != -1) {
    axios
        .get(`${serverAddress}playlist/${playlistId}`)
        .then((response) => {
          setCampos(response.data);
        })
        .catch(() => {
          setCampos({ titulo: "", descricao: "", imagem: "" });
        });
    }
  };

  React.useEffect(() => {
    getPLaylist();
  }, [playlistId]);

  React.useEffect(() => {
    if (props.playlistIdEditar != -1 && props.playlistIdEditar != null && props.playlistIdEditar != "") {
      setPlaylistId(props.playlistIdEditar);
    }
  }, [props]);

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
                props.setmodalVisible(false);
                resetData();
                //window.location.href = "/cfit_admin/playlists";
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
                <div>
                  <span>Confirma?</span>
                  <input
                    className="form-check-input mx-3 mt-2"
                    onChange={(e) => {
                      setPermiteDeletar(e.target.checked);
                      console.log(permiteDeletar);
                    }}
                    type="checkbox"
                    value={permiteDeletar}
                    id="flexCheckDefault"
                  />
                  <button
                    className="btn btn-danger wsi-shadow-light"
                    onClick={() => {
                      deletarPlaylist();
                    }}
                  >
                    DELETAR PLAYLIST
                  </button>
                </div>
              ) : null}
            </div>
            {alert_adicionar_editar_playlist ? (
              <div className={`mt-3 alert alert-${tipo_alert}`}>
                <h5>{sucesso_erro_mensagem}</h5>
              </div>
            ) : null}
            {playlistId != -1 ? (
              <div className="border border-danger rounded mt-5 p-2">
                <TabelaDeAulas
                  playlistId={playlistId}
                  modalVisible={props.modalVisible}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAdicionarPlaylist;
