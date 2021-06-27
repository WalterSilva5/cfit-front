import { NavLink } from 'react-router-dom';
import { logoutUser } from '../../util/UserUtil';

const PageHeader = () => (
  <div>
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2">
        <span className="navbar-brand"><b>CFIT</b></span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <NavLink className="btn btn-primary" to="/">INICIO</NavLink>
            <NavLink className="btn btn-primary mx-2" to="/aulas">AULAS</NavLink>
            <NavLink className="btn btn-primary" to="/teste">teste</NavLink>
          </div>
          <button className="btn mx-2 btn-danger" type="button" onClick={() => logoutUser()}>SAIR</button>
        </div>
      </nav>
    </div>
  </div>
);

export default PageHeader;
