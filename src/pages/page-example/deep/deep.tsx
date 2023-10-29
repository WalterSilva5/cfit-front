import { useParams } from 'react-router-dom';

export function Deep() {
  const { parameter } = useParams();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        width: '100%'
      }}
    >
      <h1>Pagina Interna</h1>
      <h3>parametro: {parameter || 'vazio'}</h3>
    </div>
  );
}
