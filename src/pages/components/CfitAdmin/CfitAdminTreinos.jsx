import Categoria from "./CfitAdminTreinos/Categoria";
import Exercicio from "./CfitAdminTreinos/Exercicio";

const CfitAdminTreinos = () => {
  return (
    <div>
      <h1>TREINOS</h1>
      <div className="my-2">
        <Categoria />
      </div>
      <div className="my-2">
      <Exercicio/>
      </div>
    </div>
  );
};

export default CfitAdminTreinos;
