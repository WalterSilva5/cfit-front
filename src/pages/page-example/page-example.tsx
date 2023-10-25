import { GoToPageWithParameter } from '../../components/go-to-page-with-parameter/go-to-page-with-parameter';

export function PageExample() {
  return (
    <div>
      <h1>Pagina Exemplo</h1>
      <hr />
      <GoToPageWithParameter url="/deep" />
    </div>
  );
}
