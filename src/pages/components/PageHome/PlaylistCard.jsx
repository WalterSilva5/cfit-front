/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import classes from './PlaylistCard.module.scss';

const imagemVazia = 'https://s3-sa-east-1.amazonaws.com/doth-erp/logos/conveniados/nao_disponivel.jpg';
const PlaylistCard = (props) => {
  const [descricao, setdescricao] = React.useState(props.descricao);
  return (
    <div
      className="col-lg-4 col-sm-6 btn my-3 p-1"
      onClick={() => {
        window.location.href = `/reproduzir_playlist/${props.id}`;
      }}
      style={{ padding: '-20px', maxWidth: 'none' }}
    >
      <div className={`${classes.cfitCard}`}>
        <h3 className="container text-center">
          <b>{props.titulo}</b>
        </h3>
        <div className="container p-0 m-0 " style={{ height: '70%' }}>
          <img
            className="img-fluid"
            style={{ height: '100%', width: '100%' }}
            src={props.imagem ? props.imagem : imagemVazia}
          />
        </div>
        <div className="text-center container-fluid font-weight-bold">
          <h6>{descricao.length > 60 ? `${descricao.slice(0, 60)}...` : descricao}</h6>
        </div>
      </div>
    </div>
  );
};
export default PlaylistCard;
