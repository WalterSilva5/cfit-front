/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import axios from 'axios';

const RegisterUser = (username) => {
  axios
    .post('http://localhost/user/', { username, password })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const PageLoginModalCadastro = (props) => {
  const [userName, setuserName] = React.useState('');
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
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
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
                console.log('clickado');
                RegisterUser(userName);
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
