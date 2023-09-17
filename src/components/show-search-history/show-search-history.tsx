import { useSelector, useDispatch } from 'react-redux';

export function ShowSearchHistory() {
  const searchHistory = useSelector((state: any) => state.searchHistory);
  const dispatch = useDispatch();
  function clearHistory() {
    dispatch({ type: 'CLEAR_SEARCH_HISTORY', payload: null });
  }
  return (
    <div>
      <h3>Historico de buscas</h3>{' '}
      <button
        onClick={() => {
          clearHistory();
        }}
      >
        LIMPAR
      </button>
      <ul>
        {searchHistory.profiles.map((search: string, index: number) => (
          <li key={`${search}${index}`}>{search}</li>
        ))}
      </ul>
    </div>
  );
}
