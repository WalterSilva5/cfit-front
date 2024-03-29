import React, { useState, ReactNode } from 'react';
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
	Typography,
	Box,
	Link as ButtonLink
} from '@mui/material';
import { FormActions } from '@/enums/form-actions.enum';
import { PageBox } from '@/components/pages/page-container-box';
import { Link } from 'react-router-dom';
interface Data {
	[key: string]: any; // Changed to any to support more data types
}
interface DataTableProps {
	data: Data[];
	title: string;
	headers: HeaderProps[];
	renderCell?: (item: Data, column: string) => ReactNode;
	module: string;
	actions?: ReactNode[]; // Changed to array of ReactNode for custom actions
	addNew?: boolean;
	customStyles?: {
		table?: object;
		row?: object;
		header?: object;
	};
}
export interface HeaderProps {
	displayText: string;
	value: string;
	css?: React.CSSProperties;
}

export interface TableHeaderProps {
	headers: HeaderProps[];
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	fontWeight: 'bold',
	backgroundColor: theme.palette.secondary.dark,
	color: theme.palette.common.white
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover
	}
}));

const StyledTablePagination = styled(TablePagination)({
	float: 'right'
});

const TableHeader: React.FC<TableHeaderProps> = ({ headers }) => (
	<TableHead>
		<TableRow>
			{headers.map((header, index) => (
				<StyledTableCell key={index} style={{ ...header.css }}>
					{header.displayText}
				</StyledTableCell>
			))}
		</TableRow>
	</TableHead>
);

export const DataTable: React.FC<DataTableProps> = ({
	data,
	headers,
	renderCell,
	actions,
	customStyles,
	title,
	module,
	addNew = true
}) => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	const handleChangePage = (_event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const renderActionButtons = (actionType: string, id: number) => {
		switch (actionType) {
			case FormActions.EDIT:
				return (
					<ButtonLink
						component={Link}
						// todo ajustar essa rota para endereço correto
						to={`/${module}/${id}`}
					>
						<Button
							sx={{
								color: '#963f00',
								marginRight: '5px',
								backgroundColor: '#cffffa',
								fontWeight: 'bold'
							}}
						>
							Editar
						</Button>
					</ButtonLink>
				);
			case FormActions.DELETE:
				return (
					<Button
						sx={{
							color: '#d4fff6',
							marginRight: '5px',
							backgroundColor: '#96000f',
							fontWeight: 'bold'
						}}
					>
						Excluir
					</Button>
				);
			default:
				return null;
		}
	};

	return (
		<PageBox>
			<Box>
				<Typography
					variant="h4"
					sx={{
						fontWeight: 'bold'
					}}
				>
					{title}
				</Typography>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'flex-start',
						height: '60px'
					}}
				>
					<Link
						to={`/${module}/new`}
						style={{
							textDecoration: 'none'
						}}
					>
						<Button
							variant="contained"
							color="primary"
							sx={{
								marginTop: '20px',
								display: addNew ? 'block' : 'none',
								backgroundColor: '#00a152',
								fontWeight: 'bold',
								boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)'
							}}
						>
							Adicionar
						</Button>
					</Link>
				</Box>
				<TableContainer
					component={Paper}
					sx={{
						marginTop: '20px',
						boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
						borderRadius: '10px'
					}}
				>
					<Table
						sx={{
							...customStyles?.table,
							borderRadius: '10px'
						}}
					>
						<TableHeader headers={headers} />
						<TableBody>
							{data
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((data, index) => (
									<StyledTableRow key={index} sx={{ ...customStyles?.row }}>
										{headers.map((header, i) => (
											<TableCell key={i}>
												{header.value === 'actions'
													? actions?.map((action, idx) => (
															<span key={idx}>
																{renderActionButtons(
																	action ? action.toString() : '',
																	data.id
																)}
															</span>
													  ))
													: renderCell
													? renderCell(data, header.value)
													: data[header.value]}
											</TableCell>
										))}
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
			</Box>
		</PageBox>
	);
};
