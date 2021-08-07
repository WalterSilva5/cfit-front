import axios from 'axios';
import { serverAddress } from '@/util/Settings';
import Carregando from '@/pages/components/Carregando';

const BuscarExercicio = (props) => {
  const [exercicios, setExercicios] = React.useState([]);
  const [isCarregando, setIsCarregando] = React.useState(false);
  const [categorias, setCategorias] = React.useState([]);
  const [searchExercicio, setSearchExercicio] = React.useState('');
  const [filtroExercicio, setFiltroExercicio] = React.useState([]);
  const getCategorias = () => {
    axios.get(`${serverAddress}categoria/`)
      .then((response) => {
        setCategorias(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getExercicios = () => {
    setIsCarregando(true);
    axios.get(`${serverAddress}exercicio/`)
      .then((response) => {
        setExercicios(response.data);
      })
      .catch((error) => {
        console.log(error);
        // setIsCarregando(false);
      });
  };
  React.useEffect(() => {
    if (categorias.length == 0) {
      getCategorias();
    }
  }, [categorias]);
  React.useEffect(() => {
    if (categorias.length > 0 && exercicios.length == 0) {
      getExercicios();
    }
  }, [exercicios, categorias]);

  React.useEffect(() => {
    if (props.idExercicio == -1) {
      getExercicios();
    }
  }, [props.idExercicio]);

  React.useEffect(() => {
    if (searchExercicio != '') {
      const novosExercicios = [];
      exercicios.map((exercicio) => {
        if (exercicio.nome.toLowerCase().indexOf(searchExercicio.toLowerCase()) > -1) {
          novosExercicios.push(exercicio);
        }
      });
      setFiltroExercicio(novosExercicios);
    } else if (searchExercicio == '' && filtroExercicio.length > 0) {
      setFiltroExercicio([...exercicios]);
    }
  }, [searchExercicio]);

  React.useEffect(() => {
    if (exercicios.length === 0 && filtroExercicio.length === 0) {
      getCategorias();
      getExercicios();
    } else if (exercicios.length > 0 && filtroExercicio.length == 0) {
      setFiltroExercicio([...exercicios]);
    } else if (exercicios.length > 0 && filtroExercicio.length > 0 && filtroExercicio != null) {
      setIsCarregando(false);
    }
  },
  [exercicios]);

  if (isCarregando || exercicios.length == 0) {
    return <Carregando />;
  }
  return (
    <div
      className="wsi-bg-black rounded col-12 text-center my-3"
      style={{
        backgroundColor: '#02021f',
      }}
    >
      <div className="col-12 m-0 row">
        <div className="col-md-6">
          <h4 className="text-secondary p-0 p-md-4"
          >ESCOLHA UM EXERCICIO</h4>
        </div>
        <div className="col-md-6 pb-4 p-md-4 d-md-flex">
          <label className="h5 mx-2" htmlFor="filtrar">FILTRAR</label>
          <input
            type="text"
            id="filtrar"
            className="form-control"
            placeholder="Filtrar"
            value={searchExercicio}
            onChange={(e) => setSearchExercicio(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div
          className="table-responsive bg-primary d-block"
          style={{ maxHeight: '300px', overflow: 'auto' }}
        >
          <table className="table text-white table-bordered col-12 container" style={{
            width: '100%',
            position: 'relative',
          }}>
            <thead className="bg-primary border-dark">
              <tr>
                <th className="col-4">NOME</th>
                <th className="col-1">ESCOLHER</th>
                {/* <th className="col-3">VIDEO</th> */}
                <th className="col-2">CATEGORIA</th>
              </tr>
            </thead>
            <tbody>
              {filtroExercicio.map((exercicio) => (
                <tr key={exercicio.pk}>
                  <td>
                    {exercicio.nome}
                  </td>
                  {/* <td>{exercicio.video}</td> */}
                  {/* <td>
                    {exercicio.dica.slice(0, 30)}
                  </td> */}
                  <td className="col-1">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        props.setIdExercicio(exercicio.pk);
                      }}
                    >
                      ESCOLHER
                    </button>
                  </td>
                  <td>
                    {categorias.find((categoria) => categoria.pk == exercicio.categoria).nome}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BuscarExercicio;
