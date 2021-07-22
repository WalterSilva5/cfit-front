/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
import ModalAdicionarPlaylist from "./CfitAdminPlaylists/ModalAdicionarPlaylist";
import axios from 'axios';
import { serverAddress } from '@/util/Settings';

const CfitAdminPlaylists = () => {
  const [modalVisible, setmodalVisible] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);
  const [playlists, setplaylists] = React.useState([]);
  const [playlistIdEditar, setplaylistIdEditar] = React.useState(-1);
  const updatePlaylistIdEditar = (playlistId) => {
    setplaylistIdEditar(parseInt(playlistId));
  }
  const getPlaylists = () => {
    axios.get(`${serverAddress}playlist`).then((response) => {
      setplaylists(response.data.map((res) => (
        <tr className="wsi-border-admin" key={res.pk}>
          <td className="wsi-border-admin">{res.titulo}</td>
          <td className="wsi-border-admin">{res.descricao}</td>
          <td className="wsi-border-admin"><button className="btn wsi-btn-admin-dark" value={res.pk}
            onClick={(e) => {
              updatePlaylistIdEditar(e.target.value);
              setmodalVisible(true);
            }}
          >EDITAR</button></td>
        </tr>
      )));
      setLoading(false);
    });
  };
  
  React.useEffect(() => {
    getPlaylists();
  }, []);
  if (isLoading) {
    return <div><h1>Loading...</h1></div>;
  }

  return (
    <div>
      <div className="row d-flex justify-content-between px-3">
        <h1 className="d-block col-4 m-2">PLAYLISTS</h1>
        {' '}
        <button className="m-2 col-4 btn wsi-btn-admin-dark wsi-shadow-light"
        onClick={() => {
          setmodalVisible(true);
        }}
        >ADICIONAR NOVA</button>
      </div>
      <div className="p-2">
        <div style={{ height: '70vh', overflow: 'auto' }} className="rounded wsi-border-admin">
          <table className="table table-hover table-dark table-borderd wsi-border-admin rounded">
            <thead className="wsi-border-admin">
              <tr className="">
                <th scope="col" className="border border-primary wsi-btn-admin-dark" style={{backgroundColor: '#2e0040'}}>TITULO</th>
                <th scope="col" className="border border-primary wsi-btn-admin-dark" style={{backgroundColor: '#2e0040'}}>DESCRICAO</th>
                <th className="col-1 border border-primary wsi-btn-admin-dark" style={{backgroundColor: '#2e0040'}}>EDITAR</th>
              </tr>
            </thead>
            <tbody>
              {playlists}
            </tbody>
          </table>
          <div
            className={` modal animate__animated d-block
              ${
                !modalVisible ? 'animate__fadeOutRight' : 'animate__fadeInLeft'
              }`}
          >
            <ModalAdicionarPlaylist setmodalVisible={setmodalVisible} playlistIdEditar={playlistIdEditar} setplaylistIdEditar={setplaylistIdEditar}/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CfitAdminPlaylists;
