import React from 'react';
import ReactTable from "react-table";
import Pagination from "react-js-pagination";
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-table/react-table.css";
import "./../../assets/css/app-custom.css";

const TableCustom = (props) => {
  const {
    makeData,
    makeColumns,
    activePage,
    totalData,
    handlePageChange,
    sorted,
    onSortedChange,
    isPagination,
  } = props;
  return (
    <div>
      <ReactTable
        noDataText="No result found"
        filterable
        data={ makeData }
        columns={ makeColumns }
        showPagination={ false }
        className="-striped -highlight"
        defaultFilterMethod={(filter, row) =>
          String(row[filter.id]) === filter.value }
        sorted={sorted}
        onSortedChange={sorted => onSortedChange(sorted)}
        filterable={true}
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

TableCustom.propTypes = {
  makeData: PropTypes.array,
  makeColumns: PropTypes.array,
  activePage: PropTypes.number,
  totalData: PropTypes.number,
  handlePageChange: PropTypes.func,
  isPagination: PropTypes.bool,
  sorted: PropTypes.array,
  onSortedChange: PropTypes.func,
};

TableCustom.defaultProps = {
  makeData: null,
  makeColumns: null,
  activePage: null,
  totalData: null,
  handlePageChange: null,
  isPagination: false,
};

export default TableCustom; 

