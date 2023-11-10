import React, { useState } from 'react';
import { styled } from '@mui/system';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";

interface Data {
  [key: string]: string | number;
}

interface DataTableProps {
  datas: Data[];
  headers: string[];
}

interface TableHeaderProps {
  headers: string[];
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.common.white,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const StyledTablePagination = styled(TablePagination)({
  float: 'right',
});

const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => (
  <TableHead>
    <TableRow>
      {headers.map((header, index) => (
        <StyledTableCell key={index}>{header}</StyledTableCell>
      ))}
    </TableRow>
  </TableHead>
);

export const DataTable: React.FC<DataTableProps> = ({ datas, headers }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

	return (
		<TableContainer component={Paper}
			sx={{
				marginTop: "1rem",
				"& .MuiTableCell-root": {
					padding: "0.5rem",
				},
			}}
		>
			<Table>
				<TableHeader headers={headers} />
				<TableBody>
					{datas.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data, index) => (
						<StyledTableRow key={index}>
							{headers.map((header, i) => (
								<TableCell key={i}>{data[header]}</TableCell>
							))}
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
			<StyledTablePagination
				rowsPerPageOptions={[1, 10, 25]}
				count={datas.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</TableContainer>
	);
};
