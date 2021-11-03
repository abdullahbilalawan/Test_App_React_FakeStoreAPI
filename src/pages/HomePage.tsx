import React, { useEffect, useState } from 'react';
import BackupTableSharpIcon from '@mui/icons-material/BackupTableSharp';
import Heading from '../components/Heading'
import DataTable from '../components/DataTable'
import ActionBar from '../components/ActionBar'


const sx1 ={
    display: 'flex',
	flexDirection: 'column' as 'column',
    justifyContent: 'space-between',
    marginTop: '4%',
	marginLeft: '2%',
	width: '75%',
	

	
}
const sx2 ={
    float: 'right' as 'right',
	marginRight: '5%',

	
}
export default function Homepage() {


	return (
		<div>
			<div style={sx2}>
			<ActionBar />

			</div>
		
			<div style={sx1}>
                <Heading />
				<DataTable />
				
			</div>
		</div>
	);
}
