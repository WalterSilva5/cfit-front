import { GetProfile, ShowProfile, ShowSearchHistory } from '../../components';
import styles from './page-request.module.scss';

export function PageRequest() {
  return (
    <div>
      <h1>Pagina com exemplos de requisições</h1>
      <hr />
      <GetProfile />
      <hr />
      <div className={styles.displayGroup}>
        <div className={styles.showProfile}>
          <ShowProfile />
        </div>
        <div className={styles.showSearchHistory}>
          <ShowSearchHistory />
        </div>
      </div>
    </div>
  );
}
