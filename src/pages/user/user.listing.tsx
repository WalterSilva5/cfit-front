import { Box, Button } from "@mui/material";
import { PageBox } from "../../components/pages/page-container-box";
import { DataTable } from "@/components/listing/listing-table.component";
import { Typography } from "@mui/material";
import { FormActions } from "@/enums/form-actions.enum";

const users = [
  {
    Name: "John Doe",
    Email: "john.doe@example.com",
    Role: "Administrator",
  },
  {
    Name: "Jane Doe",
    Email: "jane.doe@example.com",
    Role: "User",
  },
  {
    Name: "Bob Smith",
    Email: "bob.smith@example.com",
    Role: "User",
  },
];

const headers = ["Name", "Email", "Role", "Ações"];
const actions = [FormActions.EDIT, FormActions.DELETE];

export function UserListing() {
  return (
    <PageBox>
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
          }}
        >
          Usuários
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            height: "60px",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              marginTop: "20px",
            }}
          >
            Adicionar
          </Button>
        </Box>
        <DataTable data={users} headers={headers} actions={actions} />
      </Box>
    </PageBox>
  );
}
