import { serverAddress } from "@/util/Settings";
import axios from "axios";
import Carregando from "@/pages/components/Carregando";
import { NavLink } from "react-router-dom";
import PageHeader from "./components/PageHeader";

const PagePerfil = () => {
  const token = localStorage.getItem("authToken");
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
  const [carregando, setCarregando] = React.useState(true);
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");

  const getUser = () => {
    axios
      .get(`${serverAddress}user/profile`)
      .then((res) => {
        setUsername(res.data.username);
        setEmail(res.data.email);
        setCarregando(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    getUser();
  }, []);
  if (carregando) {
    return (
      <div>
        <Carregando />
      </div>
    );
  }
  return (
    <div>
      <PageHeader />
      <span className="display-3 d-flex justify-content-center my-3">
        PERFIL
      </span>
      <div className="row d-flex text-center">
        <div className="col-12">
          <div>
            <label className="d-flex my-2" htmlFor="username">
              <h3>Nome de usuário</h3>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Nome de usuario"
              value={username}
              disabled
            />
          </div>
          {/* <div className="my-3 col-12 border border-secondary rounded py-4">
            <label className="h1" htmlFor="username">
            Contatos
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PagePerfil;
