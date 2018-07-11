import React from 'react';
import Pagination from "react-js-pagination";
import 'bootstrap/dist/css/bootstrap.min.css';

const PaginationSimple = (props) => {
  const {
    activePage,
    itemPerPage,
    totalData,
    handlePageChange,
  } = props;
  return (
    <nav>
      <Pagination
        activePage={ activePage }
        itemsCountPerPage={ itemPerPage }
        totalItemsCount={ totalData }
        pageRangeDisplayed={ 5 }
        onChange={ handlePageChange }
        linkClass="page-link"
        itemClass="page-item"
        innerClass="pagination justify-content-center"
      />
    </nav>
  );
};

export default PaginationSimple; 

