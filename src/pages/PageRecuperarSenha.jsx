import PageLoginNav from "./components/PageLogin/PageLoginNav";
import { serverAddress } from "@/util/Settings";
import axios from "axios";
const PageRecuperarSenha = () => {
  const [email, setEmail] = React.useState("");
  const [msgAlert, setMsgAlert] = React.useState("");
  const [alertType, setAlertType] = React.useState("");
  const [alertVisible, setAlertVisible] = React.useState(true);

  const setAlert = (type, msg, visble = true) => {
    setAlertType(type);
    setMsgAlert(msg);
    setAlertVisible(visble);
  };

  const RecuperarSenha = () => {
    axios
      .post(`${serverAddress}user/recuperar-senha/`, { email })
      .then((res) => {
        if (res.data.success) {
          setAlert(
            "success",
            "Um codigo de recuperação foi enviado para o seu email!"
          );
        } else {
          setAlert("danger", "Email não encontrado!");
        }
      })
      .catch((err) => {
        setAlert("danger", "Erro ao enviar email!");
      });
  };

  return (
    <div>
      <PageLoginNav />
      <div className="text-center">
        <h4>Digite seu email para recuperar sua senha.</h4>
        <div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="col-md-4 col-12  rounded mx-2"
              id="email"
              placeholder="Email"
            />
            <br />
            <button
              className="btn btn-primary my-2"
              onClick={() => {
                RecuperarSenha();
              }}
            >
              RECUPERAR
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-center my-2">
          {alertVisible ? (
            <div className={`col-md-6 alert alert-${alertType}`} role="alert">
              {msgAlert}
            </div>
          ) : (
            none
          )}
        </div>
        <button
          className="btn btn-success"
          onClick={() => {
            window.location.href = "/home";
          }}
        >
          VOLTAR AO INICIO
        </button>
      </div>
    </div>
  );
};

export default PageRecuperarSenha;
