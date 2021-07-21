/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import classes from './PlaylistCard.module.scss';

const PlaylistCard = (props) => (
  <div
    className="col-md-4  my-3"
    style={{ padding: '-20px', maxWidth: 'none' }}
  >
    <div className={` px-2 ${classes.cfitCard}`}>
      <h3
        className="container text-center"
      >
        <b>{props.titulo}</b>
      </h3>
      <div className="container">{props.imagem ? props.imagem : 'imagem vazia'}</div>
      <div
        className="text-center container-fluid font-weight-bold"
      >
        <h6>descricao</h6>
      </div>
    </div>
  </div>
);

export default PlaylistCard;
