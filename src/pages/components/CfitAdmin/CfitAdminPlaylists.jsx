/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
import ModalAdicionarPlaylist from "./CfitAdminPlaylists/ModalAdicionarPlaylist";
import axios from 'axios';
import { serverAddress } from '@/util/Settings';

const CfitAdminPlaylists = () => {
  const [modalVisible, setmodalVisible] = React.useState(false);
  const [isCarregando, setCarregando] = React.useState(true);
  const [playlists, setplaylists] = React.useState([]);
  const [playlistIdEditar, setplaylistIdEditar] = React.useState(-1);
  const getPlaylists = () => {
    axios.get(`${serverAddress}playlist`).then((response) => {
      setplaylists(response.data.map((res) => (
        <tr className="wsi-border-admin" key={res.pk}>
          <td className="wsi-border-admin">{res.titulo}</td>
          <td className="wsi-border-admin">{res.descricao}</td>
          <td className="wsi-border-admin"><button className="btn wsi-btn-admin" value={res.pk}
            onClick={(e) => {
              setmodalVisible(true);
              setplaylistIdEditar(e.target.value);
            }}
          >EDITAR</button></td>
        </tr>
      )));
      setCarregando(false);
    });
  };

  React.useEffect(() => {
    if(playlists.length === 0) {
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
          <button className="btn wsi-btn-admin col-md-8"
          onClick={() => {
            setmodalVisible(true);
          }}
          >ADICIONAR NOVA</button>
        </div>
      </div>
      <div className="p-md-2">
        <div style={{ height: '70vh', overflow: 'auto' }} className="rounded wsi-border-admin">
          <table className="table table-hover table-dark table-borderd wsi-border-admin rounded">
            <thead className="wsi-border-admin">
              <tr className="">
                <th scope="col" className="border border-primary" style={{backgroundColor: 'blue'}}>TITULO</th>
                <th scope="col" className="border border-primary" style={{backgroundColor: 'blue'}}>DESCRICAO</th>
                <th className="col-1 border border-primary" style={{backgroundColor: 'blue'}}>EDITAR</th>
              </tr>
            </thead>
            <tbody>
              {playlists}
            </tbody>
          </table>
          <div
            className={` modal animate__animated
              ${
                modalVisible ? 'animate__fadeInLeft  d-block': 'animate__fadeOutRight  d-block' 
              }`}
          >
            <ModalAdicionarPlaylist setmodalVisible={setmodalVisible} playlistIdEditar={playlistIdEditar} 
            setplaylistIdEditar={setplaylistIdEditar} modalVisible={modalVisible}/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CfitAdminPlaylists;
