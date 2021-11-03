import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
	<Box
		component="span"
		sx={{
			display: 'inline-block',
			mx: '2px',
			transform: 'scale(0.8)',
		}}
	>
		•
	</Box>
);

export default function Heading() {
	return (
		<Card sx={{ minWidth: 375, color: 'text.disabled', boxShadow: 3}}>
			<CardContent>
				<Typography
					sx={{ fontSize: 20, typography: 'h3' }}
					color="secondary"
					gutterBottom
				>
					Test App Home Page
				</Typography>
				
			</CardContent>
		
		</Card>
	);
}
