import { DataTable } from "@/components/listing/listing-table.component";
import { } from "@mui/material";
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
    <>
      <DataTable
        data={users}
        headers={headers}
        actions={actions}
        title="Usuários"
        addNew={true}
      />
    </>
  );
}
