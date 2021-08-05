import axios from 'axios';
import { serverAddress } from '@/util/Settings';
import Carregando from '@/pages/components/Carregando';

const TabelaExercicio = (props) => {
  const [exercicios, setExercicios] = React.useState([]);
  const [isCarregando, setIsCarregando] = React.useState(false);
  const [categorias, setCategorias] = React.useState([]);
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
        setExercicios(response.data.map((exercicio) => (
          <tr key={exercicio.pk}>
            <td>{exercicio.nome}</td>
            <td>{exercicio.video}</td>
            <td>{exercicio.dica}</td>
            <td>
              {categorias.find((categoria) => categoria.pk == exercicio.categoria).nome}
            </td>
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
          </tr>
        )));
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
    }
  }, [exercicios, categorias]);

  React.useEffect(() => {
    if (props.exercicioEditId == -1) {
      getExercicios();
    }
  }, [props.exercicioEditId]);

  if (isCarregando) {
    return <Carregando />;
  }
  return (
    <div className="wsi-bg-black rounded p-md-2">
      <h2 className="text-secondary">EXERCICIOS CADASTRADOS</h2>
      <div className="table-responsive">
        <table className="table text-white table-bordered">
          <thead className="bg-primary border-dark">
            <tr>
              <th className="col-3">NOME</th>
              <th className="col-4">VIDEO</th>
              <th className="col-3">DICA</th>
              <th className="col-1">CATEGORIA</th>
              <th className="col-1">EDITAR</th>
            </tr>
          </thead>
          <tbody style={{ maxHeight: '500px', overflow: 'auto' }}>
            {exercicios}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabelaExercicio;
