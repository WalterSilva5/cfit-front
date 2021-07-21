/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
import ModalAdicionarPlaylist from "./CfitAdminPlaylists/ModalAdicionarPlaylist";

const CfitAdminPlaylists = () => {
  const [modalVisible, setmodalVisible] = React.useState(false);
  return (
    <div>
      <div className="row">
        <h1 className="d-block col-4 m-2">PLAYLISTS</h1>
        {' '}
        <button className="m-2 col-4 btn btn-primary"
        onClick={() => {
          setmodalVisible(true);
        }}
        > ADICIONAR NOVA</button>
      </div>
      <div className="p-2">
        <div style={{ height: '70vh', overflow: 'auto' }} className="rounded border border-danger">
          <table className="table table-hover table-light table-borderd border border-danger rounded">
            <thead className="border border-danger table-primary">
              <tr>
                <th scope="col" className="border border-primary">TITULO</th>
                <th scope="col" className="border border-primary">DESCRICAO</th>
                <th className="col-1">EDITAR</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border border-danger">
                <td className="border border-danger">Mark</td>
                <td className="border border-danger">Otto</td>
                <td className="border border-danger"><button className="btn btn-primary">EDITAR</button></td>
              </tr>
            </tbody>
          </table>
          <div
            className={` modal animate__animated d-block
              ${
                !modalVisible ? 'animate__fadeOutRight' : 'animate__fadeInLeft'
              }`}
          >
            <ModalAdicionarPlaylist setmodalVisible={setmodalVisible} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CfitAdminPlaylists;
