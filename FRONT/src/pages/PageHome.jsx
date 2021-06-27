import $ from 'jquery';
import { NavLink, useHistory } from 'react-router-dom';
import axios from 'axios';

const PageHome = () => {
  const history = useHistory();
  const LogoutUser = () => {
    localStorage.removeItem('authToken');
    history.push('/');
  };

  // const playlists = [];

  axios.get('http://localhost/api-v1/playlist/').then(
    (result) => { console.log(result); },
  ).catch(() => {
    LogoutUser();
  });

  return (
    <div>
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2">
          <a className="navbar-brand" href="#"><b>CFIT</b></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              <button className="btn btn-primary">INICIO</button>
              <button className="btn btn-primary mx-2">AULAS</button>
              <button className="btn btn-primary">teste</button>
              <button className="btn mx-2 btn-danger" onClick={() => LogoutUser()}>SAIR</button>
            </div>
          </div>
        </nav>
      </div>
      <h1>inicio</h1>
    </div>
  );
};

export default PageHome;
