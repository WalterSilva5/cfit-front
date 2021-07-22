/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
import axios from 'axios';
import { serverAddress } from '../../../../util/Settings';

const ModalAdicionarPlaylist = (props) => {
  const [titulo, settitulo] = React.useState('');
  const [descricao, setdescricao] = React.useState('');
  const [imagem, setimagem] = React.useState('');
  const [playlistId, setPlaylistId] = React.useState(props.playlistIdEditar);
  const setCampos=(valores)=>{
    settitulo(valores.titulo);
    setdescricao(valores.descricao);
    setimagem(valores.imagem);
    setPlaylistId(valores.pk);
  }
  const getPlaylists = () => {
    try{
      console.log(props)
      axios.get(`${serverAddress}playlist/${props.playlistIdEditar}`).then((response) => {
        setCampos(response.data);
      }).catch(()=>{
        settitulo('');
        setdescricao('');
        setimagem('');
        setPlaylistId(-1);
      });
    }catch(e){
      setcampos({titulo: '', descricao: '', imagem: ''});
      }
    }
  
  

  React.useEffect(() => {
    getPlaylists();
  }, [props.playlistIdEditar]); 
  return (
    <div>
      <div
        className="modal-dialog modal-lg  "
        role="document"
        style={{ width: '100%' }}
      >
        <div className="modal-content wsi-container-dark wsi-border-primary wsi-shadow-primary blur">
          <div className="modal-header">
            <h5 className="modal-title text-center">
              <b>CADASTRAR NOVA PLAYLIST</b>
            </h5>
            <button
              className="btn wsi-btn btn-danger btn-sm"
              type="button"
              onClick={() => {
                props.setmodalVisible(false);
                props.setplaylistIdEditar(-1);
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
            <button
              className="btn wsi-btn-admin-dark"
            >
              {playlistId == -1 ? 'CADASTRAR': 'SALVAR'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAdicionarPlaylist;
