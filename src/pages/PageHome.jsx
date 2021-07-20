/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import PageHeader from './components/PageHeader';
import { serverAddress } from '../util/Settings';

const PageHome = () => {
  const [playlists, setplaylists] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const getPlaylists = () => {
    axios.get(`${serverAddress}playlist`).then((response) => {
      setplaylists(response.data.map((res) => <h1 key={res.pk}>{res.titulo}</h1>));
      setLoading(false);
    });
  };

  React.useEffect(() => {
    getPlaylists();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <PageHeader />
      <div>{playlists}</div>
    </div>
  );
};

export default PageHome;
