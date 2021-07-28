/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import classes from "./PlaylistCard.module.scss";
const imagemVazia =
  "https://lh3.googleusercontent.com/proxy/UdoGKvBPdnVxpJWDZM5EEGQJAVdpH06vzgpYsyU07FPr1VG_1wREBZCzeYtqa0L--GScUjvjWkY-D9_EQ8_kGs-haOw9z127nZK3v7Bxi-WR4QdfgGjmvkWL";
const PlaylistCard = (props) => (
  <div
    className="col-md-4  my-3"
    style={{ padding: "-20px", maxWidth: "none" }}
  >
    <div className={`${classes.cfitCard}`}>
      <h3 className="container text-center">
        <b>{props.titulo}</b>
      </h3>
      <div className="container p-0 m-0 bg-danger" 
      style={{ height: "70%" }}>
        <img
          className="img-fluid"
          style={{ height: "100%", width: "100%" }}
          src={props.imagem ? props.imagem : imagemVazia}
        />
      </div>
      <div className="text-center container-fluid font-weight-bold">
        <h6>{props.descricao.slice(0,60)+' ...'}</h6>
      </div>
    </div>
  </div>
);

export default PlaylistCard;
