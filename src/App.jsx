/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { Route, Switch, Redirect } from 'react-router-dom';
import PWAInstallerPrompt from 'react-pwa-installer-prompt';
import axios from 'axios';
import { serverAddress } from '@/util/Settings';
import classes from './App.module.scss';
import PageHome from './pages/PageHome.jsx';
import PageLogin from './pages/PageLogin';
import Page404 from './pages/Page404';
import CfitAdmin from './pages/CfitAdmin';
import PageReproduzirPlaylist from './pages/components/PageHome/PageReproduzirPlaylist';
import PageNovoPagamento from './pages/components/PageHome/PageNovoPagamento';

function App() {
  const authToken = localStorage.getItem('authToken');
  const [IsAdminUser, setIsAdminUser] = React.useState(false);
  axios.defaults.headers.common = { Authorization: `Bearer ${authToken}` };

  axios
    .get(`${serverAddress}user/valida_admin/`)
    .then((response) => {
      setIsAdminUser(true);
    })
    .catch(() => {
      setIsAdminUser(false);
    });

  return (
    <div className="wsi-bg-black p-0 m-0">
      <div style={{ minHeight: '100vh' }} className="p-0 m-0">
        <Switch>
          <Route exact path="/">
            {authToken ? <Redirect to="/home" /> : <PageLogin />}
          </Route>

          <Route path="/home">{authToken ? <PageHome /> : <PageLogin />}</Route>
          {/* <Route path="/aulas">
            {
              authToken ? <PageAulas /> : <PageLogin />
            }
          </Route> */}
          <Route path="/cfit_admin">
            {IsAdminUser ? <CfitAdmin /> : <PageHome />}
          </Route>
          <Route path="/reproduzir_playlist/:id?">
            {authToken ? <PageReproduzirPlaylist /> : <PageHome />}
          </Route>
          <Route path="/novo_pagamento">
            {authToken ? <PageNovoPagamento /> : <PageHome />}
          </Route>
          <Route path="/404">
            {authToken ? <Page404 /> : <PageLogin />}
          </Route>
          <Route exact path="*">
            <Page404 />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </div>
      <div className="mt-5 pt-3 navbar navbar-spand wsi-bg-black-light d-flex justify-content-center">
        <h4>
          <b>
            CARVALHOS FIT -
            {new Date().getFullYear()}
          </b>
        </h4>
        <div className="col-12 text-center">
          <a
            target="_blank"
            className="text-white"
            href="http://waltersilva5.github.io"
            rel="noreferrer"
          >
            <h6>
              <b>
                Desenvolvido por:
                <span className="text-danger"> @WALTERSILVA5</span>
              </b>
            </h6>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
