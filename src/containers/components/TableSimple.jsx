import React from 'react';
import ReactTable from "react-table";
import PaginationSimple from "./PaginationSimple";
import "react-table/react-table.css";
import "./../../assets/css/app.css";

const TableSimple = (props) => {
	const {
		makeData,
		makeColumns,
    activePage,
    itemPerPage,
    handlePageChange,
	} = props;
	return (
		<div>
			<ReactTable
        filterable
				data={ makeData }
				columns={ makeColumns }
        showPagination={ false }
				className="-striped -highlight"
        defaultFilterMethod={(filter, row) =>
          String(row[filter.id]) === filter.value }
			/>
      <br />
      <PaginationSimple
        activePage={ activePage }
        itemPerPage={ itemPerPage }
        totalData={ makeData.length }
        handlePageChange={ handlePageChange }
      />
		</div>
	);
};

export default TableSimple; 

