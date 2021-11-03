import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ActionBar() {
	return (
		<Paper sx={{ width: 80, maxWidth: '100%',boxShadow:3, height:200}}>
			<MenuList>
				<MenuItem>
					<ListItemIcon>
						<EditIcon fontSize="large" color="secondary" />
					</ListItemIcon>
					
				</MenuItem>
                <br/>
              
				<MenuItem>
					<ListItemIcon>
						<DeleteForeverIcon fontSize="large" color="secondary" />
					</ListItemIcon>

				</MenuItem>
                <br/>
				<MenuItem>
					<ListItemIcon>
						<ShoppingCartIcon  fontSize="large" color="secondary"  />
					</ListItemIcon>
					
				</MenuItem>
				<Divider />
			</MenuList>
		</Paper>
	);
}
