import { Box } from "@mui/material";
import styled from "styled-components";

export const PageBoxComponent = styled(Box)`
  display: flex;
  min-height: 80vh;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const PageBox: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <PageBoxComponent>
    <Box
      sx={{
        width: "96%",
        margin: "auto",
        marginTop: "1rem",
      }}
    >
      {children}
    </Box>
  </PageBoxComponent>
);
