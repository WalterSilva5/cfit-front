import FormExercicio from './Exercicio/FormExercicio';
import TabelaExercicio from './Exercicio/TabelaExercicio';

const Exercicio = (props) => {
    const [exercicioEditId, setExercicioEditId] = React.useState({});
    return (
        <div className="border border-secondary rounded p-md-2">
            <h4>Exercicios</h4>
            <div>
                <FormExercicio exercicioEditId={exercicioEditId} setExercicioEditId={setExercicioEditId} />
                <TabelaExercicio  exercicioEditId={exercicioEditId} setExercicioEditId={setExercicioEditId} />
            </div>
        </div>
    );
};

export default Exercicio;