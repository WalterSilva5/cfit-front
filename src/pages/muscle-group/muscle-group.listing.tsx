import { Typography, Box, Button } from "@mui/material";
import { useRoleAccess } from "@/utils/verify-role-access";
import { Role } from "@/enums/role.enum";
import { DataTable } from "@/components/listing/listing-table.component";
import { PageBox } from "../../components/pages/page-container-box";
import { FormActions } from '@/enums/form-actions.enum';

const muscleGroups = [
  {
    Name: "Biceps",
    createdAt: "2021-10-10",
    updatedAt: "2021-10-10",
  },
  {
    Name: "Triceps",
    createdAt: "2021-10-10",
    updatedAt: "2021-10-10",
  },
  {
    Name: "Peito",
    createdAt: "2021-10-10",
    updatedAt: "2021-10-10",
  },
];
const headers = ["Name", "createdAt", "updatedAt", "Ações"];
const actions = [FormActions.EDIT, FormActions.DELETE];

export function MuscleGroupListing() {
  useRoleAccess([Role.ADMIN, Role.USER, Role.MANAGER]);

  return (
    <PageBox>
      <Box
      >
        <Typography variant="h4"
          sx={{
            fontWeight: "bold",
          }}>
          Grupos Musculares
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
        <DataTable
          data={muscleGroups}
          headers={headers}
          actions={actions}
        />
      </Box></PageBox>
  );
}

export default MuscleGroupListing;
