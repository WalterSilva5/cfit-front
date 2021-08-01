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

  React.useEffect(() => {
    if (props.playlistIdEditar != -1) {
      setPlaylistId(props.playlistIdEditar);
    }
  }, [props.playlistIdEditar]);

  React.useEffect(() => {
    getPLaylist();
  }, [playlistId]);


  const resetData = () => {
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
    let url="";
    if (playlistId != -1) {
      url= `${serverAddress}playlist/${playlistId}/`,
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
        if (result.status == 201 || result.status == 200) {
          set_sucesso_erro_mensagem("Playlist salva com sucesso!");
          set_tipo_alert("success");
        } else if (result.status == 403 || result.status == 405) {
          set_sucesso_erro_mensagem("Você não tem permissão para salvar playlist!");
        }else {
          set_sucesso_erro_mensagem("Houve um erro ao salvar a playlist!");
          set_tipo_alert("danger");
        }
      })
      .catch((result) => {
        set_tipo_alert("danger");
        if (result.response.status == 400) {
          set_sucesso_erro_mensagem("Playlist já existente!");
        }
        else if (result.response.status == 401) {
          set_sucesso_erro_mensagem("Erro ao salvar playlist!");
        }else if (result.response.status == 403 || result.response.status == 405) {
          set_sucesso_erro_mensagem("Você não tem permissão para salvar playlist!");
        }else{
          set_sucesso_erro_mensagem("Erro ao salvar playlist!");
        }
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
          if (result.status == 204 || result.status == 200 || result.status == 201) {
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
            <div className="row d-flex justify-content-between">
            <div className="col-md-6">
              
              <button
                className="btn col-md-6 wsi-btn-admin wsi-shadow-light"
                onClick={() => {
                  salvarPlaylist();
                }}
              >
                {playlistId == -1 ? "CADASTRAR" : "SALVAR"}
              </button>
              </div>

              {playlistId != -1 ? (
              <div className="col-md-6">
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
