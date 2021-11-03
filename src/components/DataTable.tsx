import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import fetchUsers from '../store/actions/fetchUserData';
import { fetchUsersSuccess } from '../store/actions/userData';



export default function DataTable() {
	const dispatch = useDispatch();
	const [data, setData] = React.useState([
		{
			id: 1,
			name: 'Joe',
			type: 'admin',
		},
	]);
	const users: any[] = [];

	fetch('https://fakestoreapi.com/users?limit=10')
		.then((res) => res.json())
		.then((res) => {
			if (res.error) {
				throw res.error;
			}
			console.log(res, 'response');
			const d = res.map(
				(user: {
					id: any;
					name: { firstname: any; lastname: any };
					email: any;
				}) => ({
					id: user.id,
					firstname: user.name.firstname,
					lastname: user.name.lastname,
					email: user.email,
				})
			);

			setData(d);
		})
		.catch((error) => {
			console.log(error);
		});
	console.log(users);

	return (
		<TableContainer component={Paper}>
			<Table
				sx={{ maxWidth: 800, marginTop: '3%', alignItems: 'center'}}
				aria-label="simple table"
			>
				<TableHead>
					<TableRow>
						<TableCell>User ID</TableCell>
						<TableCell align="right">
							First Name
						</TableCell>
						<TableCell align="right">
							Last Name
						</TableCell>
						<TableCell align="right">
							Email
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row: any) => (
						<TableRow
							key={row.id}
							sx={{
								'&:last-child td, &:last-child th':
									{
										border: 0,
									},
							}}
						>
							<TableCell
								component="th"
								scope="row"
							>
								{row.id}
							</TableCell>
							<TableCell align="right">
								{row.firstname}
							</TableCell>
							<TableCell align="right">
								{row.lastname}
							</TableCell>

							<TableCell align="right">
								{row.email}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
