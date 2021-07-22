/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import PageHeader from './components/PageHeader';
import { serverAddress } from '@/util/Settings';
import PlaylistCard from './components/PageHome/PlaylistCard';
const PageHome = () => {
  const [playlists, setplaylists] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const getPlaylists = () => {
    axios.get(`${serverAddress}playlist`, {crossDomain: true}).then((response) => {
      setplaylists(response.data.map((res) => (
        <PlaylistCard
          key={res.pk}
          titulo={res.titulo}
          descricao={res.descricao}
          id={res.pk}
          imagem={res.imagem}
        />
      )));
      setLoading(false);
    });
  };

  React.useEffect(() => {
    getPlaylists();
  }, []);
  if (isLoading) {
    return <div><h1>Loading...</h1></div>;
  }
  return (
    <div>
      <PageHeader />
      <div className="row d-flex justify-content-center container-fluid">{playlists}</div>
    </div>
  );
};

export default PageHome;
