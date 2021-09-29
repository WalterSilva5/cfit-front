/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import axios from 'axios';
import { serverAddress } from '@/util/Settings';

const PageLoginModalCadastro = (props) => {
  const [usernameCadastro, setusernameCadastro] = React.useState('');
  const [passwordCadastro, setpasswordCadastro] = React.useState('');
  const [error, seterror] = React.useState('');
  const [showErrorCadastro, setshowErrorCadastro] = React.useState(false);
  const [alertType, setalertType] = React.useState('danger');
  const [confirmpasswordCadastro, setConfirmpasswordCadastro] = React.useState('');
  const [formValido, setformValido] = React.useState(false);
  // const [telefoneCadastro, setTelefoneCadastro] = React.useState('');

  const clearData = () => {
    setshowErrorCadastro(false);
    setalertType('');
    setusernameCadastro('');
    setpasswordCadastro('');
    setConfirmpasswordCadastro('');
    // setTelefoneCadastro('');
    seterror('');
  };

  const showErrorCadastroMessage = (message, type) => {
    setshowErrorCadastro(true);
    seterror(message);
    setalertType(type);
  };

  const clearForm = (alertType, error) => {
    const oldAlertType = alertType;
    const oldError = error;
    setusernameCadastro('');
    setpasswordCadastro('');
    setConfirmpasswordCadastro('');
    // setTelefoneCadastro('');
    showErrorCadastroMessage(oldError, oldAlertType);
  };

  const RegisterUser = () => {
    if (formValido) {
      axios.defaults.headers.common = { Authorization: '' };
      axios
        .post(`${serverAddress}user/`, { username: usernameCadastro, password: passwordCadastro})
        .then((response) => {
          if (response.status === 200 || response.data.success || response.status == 201) {
            showErrorCadastroMessage('Cadastro efetuado com sucesso! Já pode fazer login!', 'success');
            clearForm('success py-4 ', 'Cadastro efetuado com sucesso!');
          } else {
            showErrorCadastroMessage(response.data.message, 'danger');
          }
        })
        .catch((error) => {
          showErrorCadastroMessage(error.response.data.message, 'danger');
        });
    } else {
      showErrorCadastroMessage('Preencha todos os campos!', 'danger');
    }
  };

  React.useEffect(() => {
    if (confirmpasswordCadastro !== passwordCadastro) {
      showErrorCadastroMessage('As senhas não conferem', 'danger');
      setformValido(false);
    } else {
      showErrorCadastroMessage('', '');
      setshowErrorCadastro(false);
      setformValido(true);
    }
  }, [confirmpasswordCadastro, passwordCadastro]);

  React.useEffect(() => {
    const listener = (event) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        if (usernameCadastro != '' && passwordCadastro != '') {
          RegisterUser();
        }
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [usernameCadastro, passwordCadastro]);

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
                clearData();
                props.setmodalVisible(false);
              }}
            >
              FECHAR
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group my-2">
              <label className="h6 d-flex">Usuario</label>

              <input
                type="text"
                className="form-control wsi-shadow-light"
                placeholder="USUARIO"
                value={usernameCadastro}
                onChange={(e) => setusernameCadastro(e.target.value.toUpperCase())}
              />
            </div>
            {/* <div className="form-group my-2">
              <label className="h6 d-flex">Telefone</label>
              <input
                type="text"
                className="form-control wsi-shadow-light"
                placeholder="TELEFONE"
                value={telefoneCadastro}
                onChange={(e) => setTelefoneCadastro(e.target.value)}
              />
            </div> */}

            <div className="form-group my-2">
              <label className="h6 d-flex">Senha</label>
              <input
                type="password"
                className="form-control wsi-shadow-light"
                placeholder="SENHA"
                value={passwordCadastro}
                onChange={(e) => setpasswordCadastro(e.target.value)}
              />
            </div>
            <div className="form-group my-2">
              <label className="h6 d-flex">Confirme a senha</label>
              <input
                type="password"
                className="form-control wsi-shadow-light"
                placeholder="CONFIRME A SENHA"
                value={confirmpasswordCadastro}
                onChange={(e) => setConfirmpasswordCadastro(e.target.value)}
              />
            </div>
            <button
              className="btn btn-primary wsi-shadow-primary"
              onClick={() => {
                RegisterUser();
              }}
            >
              CADASTRAR
            </button>
            <div className={`{alert alert-${
              alertType
            } alert-dismissible alert-dismissible-dark wsi-shadow-light my-4 rounded
            ${
              showErrorCadastro ? ' d-block py-4 ' : 'd-none'
            }}`}
            >
              <h6>{error}</h6>
            </div>
            <div className="mt-5">
              <p>
                Ja possui cadastro?
                {' '}
                <button
                  className="btn wsi-btn-secondary wsi-shadow-light btn-sm"
                  onClick={() => {
                    clearData();
                    props.setmodalVisible(false);
                  }}
                >
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
