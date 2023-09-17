import { useSelector } from 'react-redux'
import styles from './show-profile.module.scss';
export function ShowProfile() {
    const profile = useSelector((state: any) => state.profile);
    if (!profile) {
        return (<div>Perfil não encontrado!</div>);
    }
    return (
        <div>
            <h3>Nome: {profile.name}</h3>
            <img
                className={`${styles.Avatar}`}
                src={profile.avatar_url || 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'} alt="profile image" />
            <h3> Repos: {profile.repos_url}</h3>
        </div>
    );
}