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
  Button,
} from "@mui/material";
import { FormActions } from '@/enums/form-actions.enum';

interface Data {
  [key: string]: string | number;
}

interface DataTableProps {
  data: Data[];
  headers: string[];
  actions?: string[];
}

interface TableHeaderProps {
  headers: string[];
  actions?: string[];
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

const TableHeader: React.FC<TableHeaderProps> = ({ headers, actions }) => (
  <TableHead>
    <TableRow>
      {headers.map((header, index) => (
        <StyledTableCell key={index}>{header}</StyledTableCell>
      ))}
      {actions && <StyledTableCell>Ações</StyledTableCell>}
    </TableRow>
  </TableHead>
);

export const DataTable: React.FC<DataTableProps> = ({ data, headers, actions }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const renderActionButtons = (actionType: string) => {
    switch (actionType) {
      case FormActions.EDIT:
        return <Button
          sx={{
            color: "#963f00",
            marginRight: "5px",
            backgroundColor: "#cffffa",
            fontWeight: "bold",
          }}
        >Editar</Button>;
      case FormActions.DELETE:
        return <Button
          sx={{
            color: "#d4fff6",
            marginRight: "5px",
            backgroundColor: "#96000f",
            fontWeight: "bold",
          }}
        >Excluir</Button>;
      default:
        return null;
    }
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
        <TableHeader headers={headers} actions={actions} />
        <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data, index) => (
            <StyledTableRow key={index}>
              {headers.map((header, i) => (
                <TableCell key={i}>{data[header]}</TableCell>
              ))}
              {actions && (
                <TableCell>
                  {actions.map((action, idx) => (
                    <span key={idx}>{renderActionButtons(action)}</span>
                  ))}
                </TableCell>
              )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
			<StyledTablePagination
				rowsPerPageOptions={[1, 10, 25]}
				count={data.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</TableContainer>
	);
};
