import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Button,
	Link,
	Box} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import {
	Link as RouterLink,
} from 'react-router-dom';

export function NavComponent(props: any) {
	const { history } = props;
	return (
		<AppBar position="static">
			<Toolbar variant="dense">
				<IconButton
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{
						mr: 2,
						display: 'none'
					}}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" color="inherit" component="div">
					<Link component={RouterLink} to="/" underline="none" color="inherit">
						NOME_DO_APP
					</Link>
				</Typography>
				<Box />
				<Button sx={{ ml: '20px' }} color="inherit" onClick={() => history.push('/')}>
					Home
				</Button>
				<Button color="inherit" onClick={() => history.push('/admin')}>
					Admin
				</Button>
			</Toolbar>
		</AppBar>
	);
}

export default NavComponent;
