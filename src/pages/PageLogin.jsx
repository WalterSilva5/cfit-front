import { NavLink } from 'react-router-dom';
import classes from './components/PageLogin/PageLogin.module.scss';
import PageLoginNav from './components/PageLogin/PageLoginNav';
import iconInstagram from '../assets/img/instagram.png';
import PageLoginModalCadastro from './components/PageLogin/PageLoginModalCadastro';
const PageLogin = () => {
  const [modalVisible, setmodalVisible] = React.useState(false);
  return (
    <div className="d-flex text-center col-12">
      <div className={`wsi-bg-black wsi-container align-center col-12 text-center ${classes.alignCenter}`} style={{ minHeight: '100vh' }}>
        <div className="text-center ${classes.PageLoginMenuContainer} px-3">
          <PageLoginNav />
        </div>
        {/* component  */}
        <div className="row wsi-border-container nm p-3 d-flex justify-content-center text-center py-3 col-12">
          <div className={` wsi-container-dark col-md-6 d-flex justify-content-center align-items-center ${classes.PageLoginMenuContainer}`}>
            <div className="text-center col-12">
              <input type="text" placeholder="TELEFONE OU EMAIL" className="form-control-lg wsi-shadow-primary form-control" />
              <input type="text" placeholder="SENHA" className="form-control form-control-lg wsi-shadow-light my-3" />
              <NavLink to="/aulas" type="submit" className="btn wsi-btn-lg col-8 btn-primary wsi-shadow-primary">ENTRAR</NavLink>

              {modalVisible
                ? (
                  <div className="modal d-block">
                    <PageLoginModalCadastro setmodalVisible={setmodalVisible} />
                  </div>
                )
                : null}

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
            <iframe className="embed-responsive-item col-12 wsi-rounded" src="https://www.youtube.com/embed/ACLkNNBwBAY" allowFullScreen />
          </div>
        </div>

        {/* component */}

        <div
          className="row wsi-border-container mt-3 nm p-3 d-flex justify-content-center text-center py-3 col-12"
        >
          <h1><b>CONTATOS</b></h1>
          <div className="row col-12 d-flex justify-content-center">
            <div className="col-md-5">
              <img className="img-fluid col-sm-3" src={iconInstagram} alt="icon instagram" />
            </div>

            <div className="row col-12">
              {/* component */}
              <div className="wsi-container-dark col-md-6 py-3">
                <h1><b>Envie uma mensagem</b></h1>

                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="SEU NOME"
                />

                <textarea
                  type="text"
                  className="form-control form-control-lg my-3"
                  placeholder="SUA MENSAGEM"
                  rows="5"
                />
                <br />
                <div className="d-flex justify-content-end">
                  <button className="btn btn-lg btn-primary">ENVIAR</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageLogin;
