import { useState } from 'react';
import { ExampleProvider } from '../../providers/example-provider';
import { useDispatch } from 'react-redux';
import { setProfile, clearProfile } from '../../store/reducers/profile.reducer';
import { addSearchHistory } from '../../store/reducers/search-history.reducer';

export function GetProfile() {
    const [userName, setUserName] = useState('');
    const [showError, setShowError] = useState(false);

    const provider = new ExampleProvider();
    const dispatch = useDispatch();
    async function getProfile(userName: string) {
        setShowError(false);
        try{
            const response = await provider.getUserProfile(userName);
            dispatch(setProfile(response.data));
            dispatch(addSearchHistory(userName));
            setUserName('');
        }catch(error){
            dispatch(clearProfile());
            setShowError(true);
        }
    }
    return (
        <div>
            <h1>Buscar Perfil no GitHub</h1>
            <p>Nome do usuario: </p>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
            <button onClick={() => getProfile(userName)}>Buscar perfil</button>
            {showError? <p>Usuario não encontrado</p> : null}
        </div>
    );
}