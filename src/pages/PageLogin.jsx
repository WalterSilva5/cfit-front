import classes from './components/PageLogin/PageLogin.module.scss';
import PageLoginNav from './components/PageLogin/PageLoginNav';
import PageLoginFormLogin from './components/PageLogin/PageLoginFormLogin';
import PageLoginContatos from './components/PageLogin/PageLoginContatos';

const PageLogin = () => (
  <div className="d-flex text-center col-12">
    <div
      className={`wsi-bg-black wsi-container align-center col-12 text-center ${classes.alignCenter}`}
      style={{ minHeight: '100vh' }}
    >
      <div className="text-center px-3">
        <PageLoginNav />
      </div>
      <PageLoginFormLogin />
      <PageLoginContatos />
    </div>
  </div>
);
export default PageLogin;
