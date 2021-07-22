/* eslint-disable prefer-destructuring */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import axios from 'axios';
import { nodeName } from 'jquery';
import jwt_decode from 'jwt-decode';
import classes from './PageLogin.module.scss';
import PageLoginModalCadastro from './PageLoginModalCadastro';
import { serverAddress } from '@/util/settings';

const PageLoginFormLogin = () => {
  const [modalVisible, setmodalVisible] = React.useState(false);
  const [msgError, setmsgError] = React.useState('teste');
  const [msgErrorVisbile, setmsgErrorVisbile] = React.useState(false);
  const [username, setusername] = React.useState('');
  const [password, setpassword] = React.useState('');

  const setLevelAccess = () => {
    const accessUser = localStorage.getItem('accessUser');
    const rota = `${serverAddress}user/${accessUser}/`;
    console.log(rota);
    axios.get(rota)
      .then((response) => {
        console.log(response.data)
        localStorage.setItem('perm', response.data.type);
      }).catch((error) => {
        console.log(error);
      })
  };

  const AuthUser = () => {
    setmsgErrorVisbile(false);
    axios
      .post(`${serverAddress}token/`, {
        username,
        password,
      })
      .then((response) => {
        const dado = jwt_decode(response.data.access);
        localStorage.setItem('authToken', response.data.access);
        localStorage.setItem('accessUser', dado.user_id);
        setLevelAccess();
        //window.location.href = '/home';
      })
      .catch((error) => {
        setmsgErrorVisbile(true);
        try {
          const status = error.response.status;
          if (status == 400) {
            setmsgError('PREENCHA TODOS OS CAMPOS');
          } else if (status == 401) {
            setmsgError('USUARIO OU SENHA INVALIDOS');
          } else if (status == undefined) {
            setmsgError('ERRO NO SERVIDOR');
          } else {
            setmsgError(toString(status.response.statusText));
          }
        } catch (e) {
          setmsgError('ERRO NO SERVIDOR', e);
        }
      });
  };
  return (
    <div className="row wsi-border-container nm p-3 d-flex justify-content-center text-center py-3 col-12">
      <div
        className={` wsi-container-dark col-md-6 d-flex justify-content-center align-items-center ${classes.PageLoginMenuContainer}`}
      >
        <div className="text-center col-12">
          <input
            type="text"
            placeholder="TELEFONE OU EMAIL"
            autoComplete="off"
            className="form-control-lg wsi-shadow-primary form-control"
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="SENHA"
            autoComplete="off"
            className="form-control form-control-lg wsi-shadow-primary my-3"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />

          <button
            className="btn btn-lg py-3 align-content-middle col-5 btn-primary wsi-shadow-light"
            onClick={() => {
              AuthUser();
            }}
          >
            <b>ENTRAR</b>
          </button>

          <div
            className={` modal animate__animated d-block
              ${
                !modalVisible ? 'animate__fadeOutRight' : 'animate__fadeInLeft'
              }`}
          >
            <PageLoginModalCadastro setmodalVisible={setmodalVisible} />
          </div>
          <div
            className={`d-flex row justify-content-center my-2 animate__animated ${
              msgErrorVisbile ? 'animate__bounceIn' : 'animate__bounceOut'
            }`}
            style={{ height: '100px' }}
          >
            <div className="alert alert-danger" role="alert">
              <b>{msgError}</b>
            </div>
          </div>
          <div className="mt-4">
            <p>
              Ainda não tem conta?
              {' '}
              <button
                className="btn wsi-btn-secondary wsi-shadow-light"
                onClick={() => {
                  setmodalVisible(true);
                }}
              >
                CADASTRE-SE
              </button>
            </p>
          </div>
        </div>
      </div>
      <div
        className={`col-md-6 embed-responsive np embed-responsive d-flex ${classes.PageLoginMenuContainer} `}
      >
        <iframe
          className="embed-responsive-item col-12 wsi-rounded"
        //   src="https://www.youtube.com/embed/--cxZbnmmoc"
          allowFullScreen
        />
      </div>
    </div>
  );
};
export default PageLoginFormLogin;
