import { GetProfile, ShowProfile, ShowSearchHistory } from '../../components';
import { Box } from '@mui/material';
import {
  BoxContainer,
  ProfileContainer,
  SearchHistoryContainer
} from './page-request.component';

export function PageRequest() {
  return (
    <BoxContainer>
      <h1>Pagina com exemplos de requisições</h1>
      <hr />
      <GetProfile />
      <hr />
      <Box>
        <ProfileContainer>
          <ShowProfile />
        </ProfileContainer>
        <SearchHistoryContainer>
          <ShowSearchHistory />
        </SearchHistoryContainer>
      </Box>
    </BoxContainer>
  );
}
