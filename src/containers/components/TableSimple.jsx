import React from 'react';
import ReactTable from "react-table";
import Pagination from "react-js-pagination";
// import PaginationSimple from "./PaginationSimple";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-table/react-table.css";
import "./../../assets/css/app.css";

const TableSimple = (props) => {
	const {
		makeData,
		makeColumns,
    activePage,
    totalData,
    handlePageChange,
    isPagination,
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
      { isPagination && <Pagination
        activePage={ activePage }
        itemsCountPerPage={ makeData.length }
        totalItemsCount={ totalData }
        pageRangeDisplayed={ 5 }
        onChange={ handlePageChange }
        linkClass="page-link"
        itemClass="page-item"
        innerClass="pagination justify-content-center"
      /> }
		</div>
	);
};

export default TableSimple; 

