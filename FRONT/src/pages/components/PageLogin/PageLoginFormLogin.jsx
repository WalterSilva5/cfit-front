import axios from 'axios';
import { nodeName } from 'jquery';
import classes from './PageLogin.module.scss';
import PageLoginModalCadastro from './PageLoginModalCadastro';

const PageLoginFormLogin = () => {
  const [modalVisible, setmodalVisible] = React.useState(false);
  const [msgError, setmsgError] = React.useState('');
  const [msgErrorVisbile, setmsgErrorVisbile] = React.useState(false);
  const [username, setusername] = React.useState('');
  const [password, setpassword] = React.useState('');

  const AuthUser = (username, password) => {
    setmsgErrorVisbile(false);
    axios
      .post('http://localhost/api/token/', { username, password })
      .then((response) => {
        localStorage.setItem('authToken', response.data.access);
        // console.log(response.data.access);
        window.location.href = '/home';
      })
      .catch((error) => {
        const status = error.response;
        setmsgErrorVisbile(true);
        if (status === 400) {
          setmsgError('PREENCHA TODOS OS CAMPOS');
        } else if (status === 401) {
          setmsgError('USUARIO OU SENHA INVALIDOS');
        }
        // console.log('Erro: ', error.response.status);
      });
  };
  return (
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
            type="password"
            placeholder="SENHA"
            autoComplete="off"
            className="form-control form-control-lg wsi-shadow-primary my-3"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />

          <button className="btn btn-lg py-3 align-content-middle col-5 btn-primary wsi-shadow-light" onClick={() => { AuthUser(username, password); }}>
            <b>ENTRAR</b>
          </button>

          <div className={` modal animate__animated d-block
              ${!modalVisible ? 'animate__fadeOutRight' : 'animate__fadeInLeft'}`}
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
              <button className="btn wsi-btn-secondary wsi-shadow-light" onClick={() => { setmodalVisible(true); }}>CADASTRE-SE</button>
            </p>
          </div>
        </div>
      </div>
      <div className={`col-md-6 embed-responsive np embed-responsive d-flex ${classes.PageLoginMenuContainer} `}>
        <iframe className="embed-responsive-item col-12 wsi-rounded" src="https://www.youtube.com/embed/--cxZbnmmoc" allowFullScreen />
      </div>
    </div>
  );
};
export default PageLoginFormLogin;
