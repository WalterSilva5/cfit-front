import FormExercicio from './Exercicio/FormExercicio';
import TabelaExercicio from './Exercicio/TabelaExercicio';

const Exercicio = (props) => {
    return (
        <div className="border border-secondary rounded p-md-2">
            <h4>Exercicios</h4>
            <div>
                <FormExercicio/>
                <TabelaExercicio/>
            </div>
        </div>
    );
};

export default Exercicio;