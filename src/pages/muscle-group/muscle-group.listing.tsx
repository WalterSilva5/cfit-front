import { useRoleAccess } from "@/utils/verify-role-access";
import { Role } from "@/enums/role.enum";
import { DataTable } from "@/components/listing/listing-table.component";
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
    <>
      <DataTable
        data={muscleGroups}
        headers={headers}
        actions={actions}
        title="Grupos Musculares"
        addNew={true}
      />
    </>
  );
}

export default MuscleGroupListing;
