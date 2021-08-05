import FormCategoria from './Categoria/FormCategoria';
import TabelaCategoria from './Categoria/TabelaCategoria';

const Categoria = (props) => {
  const [idCategoriaEditar, setIdCategoriaEditar] = React.useState(-1);
  const [nomeCategoriaEditar, setNomeCategoriaEditar] = React.useState('');
  return (
    <div className="border border-secondary rounded p-md-2">
      <h4>Categorias</h4>
      <div>
        <FormCategoria idCategoriaEditar={idCategoriaEditar} nomeCategoriaEditar={nomeCategoriaEditar}/>
        <TabelaCategoria setIdCategoriaEditar={setIdCategoriaEditar} setNomeCategoriaEditar={setNomeCategoriaEditar}/>
      </div>
    </div>
  );
};

export default Categoria;
