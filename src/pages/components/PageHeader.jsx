import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import { logoutUser } from '@/util/UserUtil';
import userIcon from '@/assets/img/conta.png';

const PageHeader = () => {
  const permission = localStorage.getItem('perm');
  return (
    <div>
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2">
          <span className="navbar-brand">
            <b>CFIT</b>
          </span>
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button> */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav" />
          </div>
          <button
            type="button"
            className="btn btn-primary btn_poopover"
            onClick={() => {
              $('.menu-popover').toggle();
            }}
            data-toggle="popover"
            title="Popover title"
            data-content="And here's some amazing content. It's very engaging. Right?"
          >
            <img src={userIcon} style={{ width: '30px' }} className="mx-1" />
            {'  '}
            MENU
          </button>
        </nav>

        <div
          className="btn border border-danger p-5 menu-popover"
          style={{
            backgroundColor: 'rgba(255, 230, 220, 0.7)',
            position: 'absolute',
            right: 0,
            width: '200px',
            display: 'None',
            zIndex: '9999',
          }}
          onMouseLeave={() => { $('.menu-popover').toggle(); }}
        >
          <NavLink exact className="btn btn-primary col-12 my-1" to="/">
            INICIO
          </NavLink>
          <NavLink exact className="btn btn-primary col-12 my-1" to="/treinos">TREINOS</NavLink>
          {permission == 10 ? (
            <NavLink
              exact
              className="btn my-1 btn-primary col-12"
              to="/cfit_admin"
              type="button"
            >
              ADMIN
            </NavLink>
          ) : null}
          <button
            className="btn my-3 btn-primary col-12"
            type="button"
            onClick={() => logoutUser()}
          >
            SAIR
          </button>
          {/* <NavLink className="btn btn-primary mx-2" to="/aulas">AULAS</NavLink>
            <NavLink className="btn btn-primary" to="/teste">teste</NavLink> */}
        </div>
      </div>
    </div>
  );
};
export default PageHeader;
