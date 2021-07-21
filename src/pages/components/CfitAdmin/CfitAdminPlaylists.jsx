/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
import ModalAdicionarPlaylist from "./CfitAdminPlaylists/ModalAdicionarPlaylist";
import axios from 'axios';
import { serverAddress } from '../../../util/Settings';

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
        <tr className="border border-danger" key={res.pk}>
          <td className="border border-danger">{res.titulo}</td>
          <td className="border border-danger">{res.descricao}</td>
          <td className="border border-danger"><button className="btn btn-primary" value={res.pk}
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
        <button className="m-2 col-4 btn btn-primary"
        onClick={() => {
          setmodalVisible(true);
        }}
        >ADICIONAR NOVA</button>
      </div>
      <div className="p-2">
        <div style={{ height: '70vh', overflow: 'auto' }} className="rounded border border-danger">
          <table className="table table-hover table-dark table-borderd border border-danger rounded">
            <thead className="border border-danger bg-secondary">
              <tr>
                <th scope="col" className="border border-primary">TITULO</th>
                <th scope="col" className="border border-primary">DESCRICAO</th>
                <th className="col-1 border border-primary"
                >EDITAR</th>
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
