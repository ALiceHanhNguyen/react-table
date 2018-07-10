import React from 'react';
import ReactTable from "react-table";

const TableSimple = (props) => {
	const {
		makeData,
		makeColumns,
	} = props;
	return (
		<div>
			<ReactTable
				data={ makeData }
				columns={ makeColumns }
			/>
		</div>
	);
};

export default TableSimple; 

