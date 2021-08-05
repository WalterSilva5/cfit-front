import axios from 'axios';
import { serverAddress } from '@/util/Settings';
import Carregando from '@/pages/components/Carregando';

const TabelaCategoria = (props) => {
  const [categorias, setCategorias] = React.useState([]);
  const [isCarregando, setIsCarregando] = React.useState(false);

  const getCategorias = () => {
    setIsCarregando(true);
    axios.get(`${serverAddress}categoria/`)
      .then((response) => {
        setCategorias(response.data.map((categoria) => (
          <tr key={categoria.pk}>
            <td>{categoria.nome}</td>
            <td>
              <button
                type="button"
                className="btn wsi-btn-admin"
                onClick={() => {
                  props.setIdCategoriaEditar(categoria.pk);
                  props.setNomeCategoriaEditar(categoria.nome);
                }}
              >
                EDITAR
              </button>
            </td>
          </tr>
        )));
        setIsCarregando(false);
      })
      .catch((error) => {
        setIsCarregando(false);
      });
  };

  React.useEffect(() => {
    if (categorias.length === 0) {
      getCategorias();
    }
  }, [categorias]);

  if (isCarregando) {
    return <Carregando />;
  }
  return (
    <div className="wsi-bg-black rounded p-md-2">
      <h2 className="text-secondary">CATEGORIAS CADASTRADAS</h2>
      <div className="table-responsive">
        <table className="table table-hover text-white table-bordered">
          <thead className="bg-primary border-dark">
            <tr>
              <th>CATEGORIA</th>
              <th className="col-1">EDITAR</th>
            </tr>
          </thead>
          <tbody style={{ maxHeight: '500px', overflow: 'auto' }}>
            {categorias}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelaCategoria;
