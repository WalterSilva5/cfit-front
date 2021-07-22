/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import axios from 'axios';
import {serverAddress} from '@/util/Settings';

const RegisterUser = (username, password) => {
  axios
    .post(`${serverAddress}user/`, { username, password })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error)
      console.log(error.response)
      //const msg = JSON.parse(error.response);
    });
};

const PageLoginModalCadastro = (props) => {
  const [username, setusername] = React.useState('');
  const [password, setpassword] = React.useState('');
  return (
    <div>
      <div
        className="modal-dialog modal-lg  "
        role="document"
        style={{ width: '100%' }}
      >
        <div className="modal-content wsi-container-dark wsi-border-primary wsi-shadow-primary blur">
          <div className="modal-header">
            <h5 className="modal-title text-center">
              <b>CADASTRE-SE</b>
            </h5>
            <button
              className="btn wsi-btn btn-danger btn-sm"
              type="button"
              onClick={() => {
                props.setmodalVisible(false);
              }}
            >
              FECHAR
            </button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              className="form-control my-3 wsi-shadow-light"
              placeholder="USUARIO"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
            {/* <input
              type="text"
              className="form-control my-3 wsi-shadow-light"
              placeholder="NOME"
            /> */}
            <input
              type="text"
              className="form-control my-3 wsi-shadow-light"
              placeholder="SENHA"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <button
              className="btn btn-primary wsi-shadow-primary"
              onClick={() => {
                RegisterUser(username, password);
              }}
            >
              CADASTRAR
            </button>

            <div className="mt-5">
              <p>
                Ja possui cadastro?
                {' '}
                <button className="btn wsi-btn-secondary wsi-shadow-light btn-sm">
                  FAZER LOGIN
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageLoginModalCadastro;
