/* eslint-disable no-unused-vars */
import axios from 'axios';
import PageHeader from './components/PageHeader';

const getPlaylists = () => {
  const data = [];
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
  };
  axios.get('http://localhost/api-v1/playlist').then(
    (result) => {
      result.data.map((teste) => {
        data.push(
          teste.titulo,
        );
      });
    },
  ).catch(
    (err) => {
      console.log(err);
    },
  );
  return data;
};

const PageHome = () => {
  const [playlists, setplaylists] = React.useState(getPlaylists);
  return (
    <div>
      <PageHeader />
      <div>
        <h1 className="text-center">PLAYLISTS</h1>
        <div>
          {
            playlists.map((res) => <h1>{res}</h1>)
          }
          <h1 />
        </div>
      </div>
    </div>
  );
};

export default PageHome;
