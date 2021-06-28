import axios from 'axios';
import PageHeader from './components/PageHeader';

const PageHome = () => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
  };
  const playlists = [];

  axios.get('http://localhost/api-v1/playlist', config)
    .then((result) => { playlists.push(result); }).catch();
  console.log(playlists);
  return (
    <div>
      <PageHeader />
      <div>
        <h1 className="text-center">PLAYLISTS</h1>
        <div>
          teste
        </div>
      </div>
    </div>
  );
};

export default PageHome;
