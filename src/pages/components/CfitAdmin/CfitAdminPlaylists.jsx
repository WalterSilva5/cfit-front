/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
import axios from 'axios';
import { serverAddress } from '@/util/Settings';
import ModalAdicionarPlaylist from './CfitAdminPlaylists/ModalAdicionarPlaylist';

const CfitAdminPlaylists = () => {
  const [modalVisible, setmodalVisible] = React.useState(false);
  const [isCarregando, setCarregando] = React.useState(true);
  const [playlists, setplaylists] = React.useState([]);
  const [playlistIdEditar, setplaylistIdEditar] = React.useState(-1);
  const getPlaylists = () => {
    axios.get(`${serverAddress}playlist`).then((response) => {
      setplaylists(response.data.playlist.map((res) => (
        <tr className="border border-secondary" key={res.pk}>
          <td className="border border-secondary">{res.titulo}</td>
          <td className="border border-secondary">{res.descricao}</td>
          <td className="border border-secondary">
            <button
              className="btn wsi-btn-admin"
              value={res.pk}
              onClick={(e) => {
                setmodalVisible(true);
                setplaylistIdEditar(e.target.value);
              }}
            >
              EDITAR
            </button>
          </td>
        </tr>
      )));
      setCarregando(false);
    });
  };

  React.useEffect(() => {
    if (!modalVisible) {
      getPlaylists();
    }
  }, [modalVisible]);

  React.useEffect(() => {
    if (playlists.length === 0) {
      getPlaylists();
    }
  }, []);
  if (isCarregando) {
    return <div><h1>Carregando...</h1></div>;
  }

  return (
    <div>
      <div className="row d-flex justify-content-between px-md-3">

        <div className="col-md-6">
          <h1 className="d-block col-4 m-md-2">PLAYLISTS</h1>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          <button
            className="btn wsi-btn-admin col-md-8"
            onClick={() => {
              setmodalVisible(true);
            }}
          >
            ADICIONAR NOVA
          </button>
        </div>
      </div>
      <div className="p-md-2">
        <div style={{ height: '70vh', overflow: 'auto' }} className="rounded border border-secondary wsi-bg-black">
          <table className="table table-borderd wsi-border-admin rounded text-white">
            <thead className="wsi-border-admin">
              <tr className="">
                <th scope="col" className="wsi-border-admin border rounded" style={{ backgroundColor: '#12001a' }}>TITULO</th>
                <th scope="col" className="wsi-border-admin border rounded" style={{ backgroundColor: '#12001a' }}>DESCRICAO</th>
                <th className="col-1 wsi-border-admin border rounded" style={{ backgroundColor: '#12001a' }}>EDITAR</th>
              </tr>
            </thead>
            <tbody>
              {playlists}
            </tbody>
          </table>
          <div
            className={` modal animate__animated
              ${
                modalVisible ? 'animate__fadeInLeft  d-block' : 'animate__fadeOutRight  d-block'
              }`}
          >
            <ModalAdicionarPlaylist
              setmodalVisible={setmodalVisible}
              playlistIdEditar={playlistIdEditar}
              setplaylistIdEditar={setplaylistIdEditar}
              modalVisible={modalVisible}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CfitAdminPlaylists;
