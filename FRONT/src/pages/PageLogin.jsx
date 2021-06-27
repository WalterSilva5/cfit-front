/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/button-has-type */
import { NavLink, useHistory } from 'react-router-dom';
import axios from 'axios';
import classes from './components/PageLogin/PageLogin.module.scss';
import PageLoginNav from './components/PageLogin/PageLoginNav';
import PageLoginModalCadastro from './components/PageLogin/PageLoginModalCadastro';
import PageLoginContatos from './components/PageLogin/PageLoginContatos';

const PageLogin = () => {
  const [modalVisible, setmodalVisible] = React.useState(false);
  const [username, setusername] = React.useState('');
  const [password, setpassword] = React.useState('');
  const history = useHistory();

  const AuthUser = (username, password) => {
    axios
      .post('http://localhost/api/token/', { username, password })
      .then((response) => {
        localStorage.setItem('authToken', response.data.access);
        //console.log(response.data.access);
        history.push('/home');
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="d-flex text-center col-12">
      <div className={`wsi-bg-black wsi-container align-center col-12 text-center ${classes.alignCenter}`} style={{ minHeight: '100vh' }}>
        <div className="text-center px-3">
          <PageLoginNav />
        </div>
        {/* component  */}
        <div className="row wsi-border-container nm p-3 d-flex justify-content-center text-center py-3 col-12">
          <div className={` wsi-container-dark col-md-6 d-flex justify-content-center align-items-center ${classes.PageLoginMenuContainer}`}>
            <div className="text-center col-12">
              <input
                type="text"
                placeholder="TELEFONE OU EMAIL"
                autoComplete="off"
                className="form-control-lg wsi-shadow-primary form-control"
                value={username}
                onChange={(e) => { setusername(e.target.value); }}
              />
              <input
                type="text"
                placeholder="SENHA"
                autoComplete="off"
                className="form-control form-control-lg wsi-shadow-primary my-3"
                value={password}
                onChange={(e) => { setpassword(e.target.value); }}
              />

              <button className="btn btn-lg py-3 align-content-middle col-5 btn-primary wsi-shadow-light" onClick={() => { AuthUser(username, password); }}>
                <b>ENTRAR</b>
              </button>

              <div className={` modal animate__animated d-block
              ${modalVisible ? 'animate__fadeInLeft' : 'animate__fadeOutRight'}`}
              >
                <PageLoginModalCadastro setmodalVisible={setmodalVisible} />
              </div>

              <div className="mt-4">
                <p>
                  Ainda não tem conta?
                  {' '}
                  <button className="btn wsi-btn-secondary wsi-shadow-light" onClick={() => { setmodalVisible(true); }}>CADASTRE-SE</button>
                </p>
              </div>
            </div>
          </div>
          <div className={`col-md-6 embed-responsive np embed-responsive d-flex ${classes.PageLoginMenuContainer} `}>
            {/* <iframe className="embed-responsive-item col-12 wsi-rounded" src="https://www.youtube.com/embed/--cxZbnmmoc" allowFullScreen /> */}
          </div>
        </div>
        <PageLoginContatos />
      </div>
    </div>
  );
};
export default PageLogin;
