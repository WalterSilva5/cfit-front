import { Box } from "@mui/material";
import { PageBox } from "../../components/pages/page-container-box";
import { DataTable } from "@/components/listing/listing-table.component";
import { Typography } from "@mui/material";
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

const headers = ["Name", "Email", "Role"];

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
          User Listing
        </Typography>
        <DataTable datas={users} headers={headers} />
      </Box>
    </PageBox>
  );
}
