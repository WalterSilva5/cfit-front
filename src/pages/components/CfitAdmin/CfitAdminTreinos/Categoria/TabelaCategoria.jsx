import axios from 'axios';
import { serverAddress } from '@/util/Settings';
import Carregando from '@/pages/components/Carregando';

const TabelaCategoria = (props) => {
  const [categorias, setCategorias] = React.useState([]);
  const [isCarregando, setIsCarregando] = React.useState(false);
  const [searchCategorias, setSearchCategorias] = React.useState('');
  const [filtroCategorias, setFiltroCategorias] = React.useState([]);
  const getCategorias = () => {
    setIsCarregando(true);
    axios.get(`${serverAddress}categoria/`)
      .then((response) => {
        setCategorias(response.data);
        setIsCarregando(false);
      })
      .catch((error) => {
        setIsCarregando(false);
      });
  };

  React.useEffect(() => {
    if (searchCategorias != '') {
      const novasCategorias = [];
      categorias.map((categoria) => {
        if (categoria.nome.toLowerCase().indexOf(searchCategorias.toLowerCase()) > -1) {
          novasCategorias.push(categoria);
        }
      });
      setFiltroCategorias(novasCategorias);
    } else if (searchCategorias == '' && filtroCategorias.length > 0) {
      setFiltroCategorias([...categorias]);
    }
  }, [searchCategorias]);

  React.useEffect(() => {
    if (categorias.length === 0 && filtroCategorias.length === 0) {
      getCategorias();
    } else if (categorias.length > 0 && filtroCategorias.length == 0) {
      setFiltroCategorias([...categorias]);
    }
  },
  [categorias]);

  if (isCarregando) {
    return <Carregando />;
  }
  return (
    <div className="wsi-bg-black rounded p-md-2">
      <div className="d-flex justify-content-between row my-2">
        <h2 className="text-secondary col-md-6 ">CATEGORIAS CADASTRADAS</h2>
        <div className=" col-md-6 d-flex">
          <label className="h5 mx-2" htmlFor="filtrar">FILTRAR</label>
          <input
            type="text"
            id="filtrar"
            className="form-control"
            placeholder="Filtrar"
            value={searchCategorias}
            onChange={(e) => setSearchCategorias(e.target.value)}
          />
        </div>
      </div>
      <div className="table-responsive"
         style={{ maxHeight: '300px', overflowY: 'auto' }} 
      >
        <table className="table table-hover text-white table-bordered">
          <thead className="bg-primary border-dark">
            <tr>
              <th>CATEGORIA</th>
              <th className="col-1">EDITAR</th>
            </tr>
          </thead>
          <tbody>
            {filtroCategorias.map((categoria) => (
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelaCategoria;
