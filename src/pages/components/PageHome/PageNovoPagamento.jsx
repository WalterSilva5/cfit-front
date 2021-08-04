import axios from 'axios';
import { serverAddress } from '@/util/Settings';
import PageHeader from '../PageHeader';

const PageNovoPagamento = () => {
  const token = localStorage.getItem('authToken');
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

  const adicionarPagamento = () => {
    axios.post(`${serverAddress}pagamento/`);
  };

  return (
    <div>
      <PageHeader />
      <h1 className="text-center">Novo Pagamento</h1>
      <div className="d-flex justify-content-center">
        <button className="btn wsi-btn-secondary" onClick={adicionarPagamento}>Adicionar Pagamento</button>
      </div>

    </div>
  );
};

export default PageNovoPagamento;
