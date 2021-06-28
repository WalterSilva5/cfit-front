/* eslint-disable import/extensions */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { Route, Switch, Redirect } from 'react-router-dom';
import classes from './App.module.scss';
import PageHome from './pages/PageHome.jsx';
import PageLogin from './pages/PageLogin';
import Page404 from './pages/Page404';
import PageAulas from './pages/PageAulas';

function App() {
  const authToken = localStorage.getItem('authToken');
  return (
    <div className="wsi-bg-black">
      <div style={{ minHeight: '95vh' }}>
        <Switch>
          <Route exact path="/">
            {
              authToken ? <PageHome /> : <PageLogin />
            }
          </Route>
          <Route exact path="/home">
            {
              authToken ? <PageHome /> : <PageLogin />
            }
          </Route>
          <Route path="/aulas">
            {
              authToken ? <PageAulas /> : <PageLogin />
            }
          </Route>
          <Route exact path="*">
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

          <a target="_b\ylank" className="text-white" href="http://waltersilva5.github.io" rel="noreferrer">
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
