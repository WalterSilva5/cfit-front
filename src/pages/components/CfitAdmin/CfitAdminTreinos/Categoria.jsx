import FormCategoria from './Categoria/FormCategoria';
import TabelaCategoria from './Categoria/TabelaCategoria';

const Categoria = (props) => {
    return (
        <div className="border border-secondary rounded p-md-2">
            <h4>Categorias</h4>
            <div>
                <FormCategoria/>
                <TabelaCategoria/>
            </div>
        </div>
    );
};

export default Categoria;