/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import classes from './PlaylistCard.module.scss';

const PlaylistCard = (props) => (
  <div
    className={` col-md-3 mx-2 my-3 p-1 ${classes.cfitCard}`}
    style={{ padding: '-20px', maxWidth: 'none' }}
  >
    <div>
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
