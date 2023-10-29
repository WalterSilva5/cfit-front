import { GoToPageWithParameter } from '../../components/go-to-page-with-parameter/go-to-page-with-parameter';
import { Box } from '@mui/material';

export function PageExample() {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        width: '100%',
      }}
    >
      <h1>Pagina Exemplo</h1>
      <hr />
      <GoToPageWithParameter url="/deep" />
    </Box>
  );
}
