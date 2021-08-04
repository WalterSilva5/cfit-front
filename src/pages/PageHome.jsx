/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { serverAddress } from '@/util/Settings';
import axios from 'axios';
import { logoutUser } from '@/util/UserUtil';
import PageHeader from './components/PageHeader';
import PlaylistCard from './components/PageHome/PlaylistCard';
import BannerAssine from './components/PageHome/BannerAssine';

const PageHome = () => {
  const token = localStorage.getItem('authToken');
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  const [playlists, setplaylists] = React.useState([]);
  const [aulaAtual, setAulaAtual] = React.useState('');
  const [assinante, setAssinante] = React.useState(false);

  const validaAssinante = () => {
    axios
      .get(`${serverAddress}user/valida_cliente/`, { crossDomain: true })
      .then((response) => {
        getPlaylists();
      })
      .catch((err) => {
        setAssinante(false);
      });
  };

  const getPlaylists = () => {
    axios
      .get(`${serverAddress}playlist/`, { crossDomain: true })
      .then((response) => {
        setAssinante(true);
        setplaylists(
          response.data.playlist.map((res) => (
            <PlaylistCard
              key={res.pk}
              titulo={res.titulo}
              descricao={res.descricao}
              id={res.pk}
              imagem={res.imagem}
            />
          )),
        );
      })
      .catch((err) => {
        validaAssinante();
      });
  };

  React.useEffect(() => {
    getPlaylists();
  }, []);
  return (
    <div>
      <PageHeader />
      <h1 className="text-center display-1">AULAS</h1>
      <div className="row p-0 d-flex justify-content-center container-fluid">
        {assinante ? playlists : <BannerAssine />}
      </div>
    </div>
  );
};

export default PageHome;
