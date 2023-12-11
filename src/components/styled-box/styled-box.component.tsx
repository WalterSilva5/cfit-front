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

export const StyledBox: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <PageBoxComponent>
    <Box
      sx={{
        width: "96%",
        margin: "auto",
        marginTop: "1rem",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.35)",
        padding: "1rem",
        borderRadius: "5px",
    }}
    >
      {children}
    </Box>
  </PageBoxComponent>
);
export default StyledBox;