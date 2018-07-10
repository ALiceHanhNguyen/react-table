import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

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
				className="-striped -highlight"
			/>
		</div>
	);
};

export default TableSimple; 

