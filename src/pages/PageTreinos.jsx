import PageHeader from '@/pages/components/PageHeader';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { serverAddress } from '@/util/Settings';
import Carregando from '@/pages/components/Carregando';

const CardTreino = (props) => {
  let titulo = props.titulo;
  if (titulo.length > 30) {
    titulo = `${titulo.substring(0, 30)}...`;
  }

  return (
    <div className="p-2 col-md-4" style={{ height: '200px' }}>
      <div className="m-2 p-2 border wsi-container-dark wsi-shadow-light border-secondary rounded text-center" style={{ height: '100%' }}>
        <h4 className="h4 text-center">{titulo}</h4>
        <button
          className="btn btn-primary mt-2"
          onClick={() => {
            window.location.href = `/visualizar_treino/${props.pk}`;
          }}
        >
          VER TREINO
        </button>
        {
          props.dica
        }
      </div>
    </div>
  );
};

const PageTreinos = (props) => {
  const [treinos, setTreinos] = React.useState([]);
  const [vazio, setVazio] = React.useState(false);
  const [carregando, setCarregando] = React.useState(true);
  const getTreinos = () => {
    axios
      .get(`${serverAddress}treino`)
      .then((response) => {
        if (response.data.treinos.length == 0) {
          setVazio(true);
        }
        setTreinos(
          response.data.treinos.map((res) => <CardTreino titulo={res.titulo} key={res.pk} pk={res.pk} dica={res.dica}/>),
        );
        setCarregando(false);
      })
      .catch((error) => {
        setCarregando(false);
        setTreinos([<div></div>]);
      });
  };

  React.useEffect(() => {
    if (treinos.length === 0 && vazio === false && carregando === true) {
      getTreinos();
    }
  }, [treinos, vazio]);
  if (carregando) {
    return (
      <Carregando />
    );
  }
  return (
    <div>
      <PageHeader />
      <h1 className="text-center display-3">TREINOS </h1>
      <div className="d-flex justify-content-center mt-3">
        <NavLink className="btn btn-lg btn-primary" to="cadastro_treino">
          CADASTRAR NOVO TREINO
        </NavLink>
      </div>
      <div className="row col-12 p-1">{treinos}</div>
    </div>
  );
};

export default PageTreinos;
