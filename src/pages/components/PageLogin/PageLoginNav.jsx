import classes from './PageLoginNav.module.scss';
import cfitBanner from '../../../assets/img/logo.png';

const PageLoginNav = (props) => {
  const share = async () => {
    if (navigator.share) {
      await navigator
        .share({
          url: 'www.hola.com',
          files: 'filesArray',
          title: 'Pictures',
          text: 'Photos from Mexico',
        })
        .then(() => console.log('Shared!'))
        .catch((err) => console.error(err));
    } else {
      alert('Not supported !!');
    }
  };
  return (
    <nav className={`navbar wsi-black px-md-5 mx-0 ${classes.PageLoginNav}`}>
      <img src={cfitBanner} className="img-fluid col-3 col-ms-4" alt="" />
      <div className="col-6 d-flex justify-content-end float-right">
        <button className="btn btn-lg wsi-bg-primary wsi-shadow-primary">CADASTRE-SE</button>

        {/* <button className="btn btn-lg wsi-bg-primary wsi-shadow-light" onClick={share}>COMPARTILHE!</button> */}
      </div>
    </nav>
  );
};
export default PageLoginNav;
