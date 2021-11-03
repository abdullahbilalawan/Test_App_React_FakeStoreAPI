import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import { useHistory } from 'react-router-dom';

export default function NavBar() {
	const history = useHistory();
	const routeChange = () => {
		let path = `/login`;
		history.push(path);
	};
	const routeChange_reg = () => {
		let path = `/register`;
		history.push(path);
	};
	const routeChangeHome = () => {
		let path = `/`;
		history.push(path);
	};
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" color="secondary">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={routeChangeHome}
					>
					<HomeSharpIcon/>
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						Test Application NavBar
					</Typography>
					<Button
						color="inherit"
						onClick={routeChange}
					>
						Login
					</Button>
					<Button
						color="inherit"
						onClick={routeChange_reg}
					>
						Add new User
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
