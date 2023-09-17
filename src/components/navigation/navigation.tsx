import { useNavigate } from 'react-router'
import styles from './navigation.module.scss'

export function Navigation () {
  const history = useNavigate()

  const handleClick = (route: string) => {
    history(route)
  }

  return (
        <div className={styles.Navigation}>
            <button onClick={() => { handleClick('/') }}>Home</button>
            <button onClick={() => { handleClick('/page-example') }}>Exemplo Pagina</button>
            <button onClick={() => { handleClick('/page-with-request') }}>Exemplo Requisições</button>
        </div>
  )
}
