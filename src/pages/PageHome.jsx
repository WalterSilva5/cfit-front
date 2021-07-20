/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import PageHeader from './components/PageHeader';
import { serverAddress } from '../util/Settings';
import PlaylistCard from './components/PageHome/PlaylistCard';

const PageHome = () => {
  const [playlists, setplaylists] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const getPlaylists = () => {
    axios.get(`${serverAddress}playlist`).then((response) => {
      console.log(response);
      // <h1 key={res.pk}>{res.titulo}</h1>
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
      <div className="row d-flex justify-content-center">{playlists}</div>
    </div>
  );
};

export default PageHome;
