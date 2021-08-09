import axios from 'axios';
import { serverAddress } from '@/util/Settings';
import Carregando from '@/pages/generic/Carregando';
import ModalExercicioPreview from '@/pages/generic/ModalExercicioPreview';

const TabelaExercicio = (props) => {
  const [exercicios, setExercicios] = React.useState([]);
  const [isCarregando, setIsCarregando] = React.useState(false);
  const [searchExercicio, setSearchExercicio] = React.useState('');
  const [filtroExercicio, setFiltroExercicio] = React.useState([]);
  const [categorias, setCategorias] = React.useState([]);
  const [exercicioPreview, setExercicioPreview] = React.useState('');

  const getCategorias = () => {
    axios.get(`${serverAddress}categoria`)
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
        setIsCarregando(false);
      })
      .catch((error) => {
        setIsCarregando(false);
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
    } else {
      // console.log(exercicios);
    }
  }, [categorias, exercicios]);

  React.useEffect(() => {
    if (props.exercicioEditId == -1) {
      getExercicios();
    }
  }, [props.exercicioEditId]);

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
    } else if (exercicios.length > 0 && filtroExercicio.length == 0) {
      setFiltroExercicio([...exercicios]);
    }
  },
  [exercicios]);

  if (isCarregando) {
    return <Carregando />;
  }
  return (
    <div className="wsi-bg-black rounded p-md-2">
      <div>
        <ModalExercicioPreview setExercicioPreview={setExercicioPreview} exercicioPreview={exercicioPreview} />
      </div>
      <div className="d-flex justify-content-between">
        <h2 className="text-secondary col-md-6 ">EXERCICIOS CADASTRADOS</h2>
        <div className=" col-md-6">
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
      <div
        className="table-responsive"
        style={{ maxHeight: '300px', overflow: 'auto' }}
      >
        <table className="table text-white table-bordered">
          <thead className="bg-primary border-dark">
            <tr>
              <th className="col-4">NOME</th>
              {!props.visualizando
                ? <th className="col-1">EDITAR</th>
                : null}
              <th className="col-1">VIDEO</th>
              <th className="col-1">CATEGORIA</th>
              <th className="col-3">DICA</th>
            </tr>
          </thead>
          <tbody>
            {filtroExercicio.map((exercicio) => (
              <tr key={exercicio.pk}>
                <td>{exercicio.nome}</td>
                {!props.visualizando
                  ? (
                    <td>
                      <button
                        type="button"
                        className="btn wsi-btn-admin"
                        onClick={() => {
                          props.setExercicioEditId(exercicio.pk);
                        }}
                      >
                        EDITAR
                      </button>
                    </td>
                  ) : null}
                <td>
                  <button
                    className="btn wsi-btn-admin"
                    onClick={() => {
                      setExercicioPreview(exercicio.video);
                    }}
                  >
                    EXEMPLO
                  </button>
                </td>
                <td>
                  {categorias.find((categoria) => categoria.pk == exercicio.categoria).nome}
                </td>
                <td>{exercicio.dica}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelaExercicio;
