import React from "react";
import { render } from "react-dom";
import TableSimple from './components/TableSimple';
import "./../assets/css/app.css";

class HomePage extends React.Component {
  constructor() {
    super();
    this.handlePageChange = this.handlePageChange.bind(this);
    this.state = {
      activePage: 1,
    };
    this.makeData = [{"id":1,"email":"trung@justa.io","created_at":"2017-02-02T03:12:06.000Z","updated_at":"2018-01-29T09:56:58.000Z","sale_id":5},{"id":2,"email":"takuma@justa.io","created_at":"2017-02-02T03:12:06.000Z","updated_at":"2018-01-29T09:26:32.000Z","sale_id":2},{"id":3,"email":"hakim@justa.io","created_at":"2017-02-02T03:12:06.000Z","updated_at":"2017-11-29T23:30:42.000Z","sale_id":1},{"id":4,"email":"casey@justa.io","created_at":"2017-02-02T03:12:06.000Z","updated_at":"2018-01-22T08:08:56.000Z","sale_id":3},{"id":5,"email":"victor@justa.io","created_at":"2017-02-02T03:12:06.000Z","updated_at":"2018-01-26T11:50:44.000Z","sale_id":4},{"id":6,"email":"romen@justa.io","created_at":"2017-02-02T03:12:06.000Z","updated_at":"2018-01-29T01:38:25.000Z","sale_id":7},{"id":7,"email":"info@justa.io","created_at":"2017-02-02T03:12:06.000Z","updated_at":"2017-08-09T23:47:04.000Z","sale_id":6},{"id":9,"email":"kelly@justa.io","created_at":"2017-09-04T00:34:06.000Z","updated_at":"2017-09-04T00:34:06.000Z","sale_id":9},{"id":10,"email":"mattias@justa.io","created_at":"2017-09-04T01:04:50.000Z","updated_at":"2017-09-27T11:31:10.000Z","sale_id":10},{"id":11,"email":"community@justa.io","created_at":"2017-09-07T06:46:24.000Z","updated_at":"2017-12-11T06:13:24.000Z","sale_id":11},{"id":12,"email":"tma@justa.io","created_at":"2017-10-04T08:43:57.000Z","updated_at":"2017-11-21T08:23:29.000Z","sale_id":12},{"id":13,"email":"juri@justa.io","created_at":"2017-10-16T04:19:09.000Z","updated_at":"2018-01-30T00:43:10.000Z","sale_id":13},{"id":14,"email":"anju@wahlandcase.com","created_at":"2017-10-19T05:44:55.000Z","updated_at":"2018-01-29T04:25:25.000Z","sale_id":14},{"id":15,"email":"emily@wahlandcase.com","created_at":"2017-12-11T02:22:35.000Z","updated_at":"2018-01-05T00:41:50.000Z","sale_id":15},{"id":16,"email":"nan@justa.io","created_at":null,"updated_at":null,"sale_id":16},{"id":17,"email":"amruta@justa.io","created_at":null,"updated_at":null,"sale_id":17},{"id":18,"email":"kotone@justa.io","created_at":null,"updated_at":null,"sale_id":18},{"id":19,"email":"opportunities@justa.io","created_at":null,"updated_at":null,"sale_id":19},{"id":20,"email":"makoto@justa.io","created_at":null,"updated_at":null,"sale_id":20}];
    this.makeColumns = [
      {
        Header: "ID",
        accessor: "id",
        Cell: row => ( <div className="pd-7-5" >{ row.value }</div> ),
      },
	    {
        Header: "Email",
        accessor: "email",
        Cell: row => ( <div className="pd-7-5" >{ row.value }</div> ),
        filterMethod: (filter, row) =>
                  row[filter.id].startsWith(filter.value),
        sortMethod: (a, b) => {
          if (a.length === b.length) {
            return a > b ? 1 : -1;
          }
          return a.length > b.length ? 1 : -1;
        }
	    },
	    {
	      Header: "Created at",
        accessor: "created_at",
        filterable: false,
        Cell: row => ( <div className="pd-7-5" >{ row.value }</div> ),
	    },
	    {
	      Header: "Updated at",
        accessor: "updated_at",
        Cell: row => ( <div className="pd-7-5" >{ row.value }</div> ),
	    },
	    {
	      Header: "ID Sale",
        accessor: "sale_id",
	    Cell: row => (
            <div className="style-col" style={{ backgroundColor: row.value > 10 ? '#85cc00' : row.value > 5 ? '#ffbf00' : '#ff2e00' }}>
            	{ row.value }
            </div>
        ),
        filterMethod: (filter, row) => {
          if (filter.value === "all") {
            return true;
          }
          if (filter.value === "true") {
            return row[filter.id] >= 10;
          }
          return row[filter.id] < 10;
        },
        Filter: ({ filter, onChange }) =>
          <select
            onChange={event => onChange(event.target.value)}
            style={{ width: "100%" }}
            value={filter ? filter.value : "all"}
          >
            <option value="all">Show All</option>
            <option value="true">More 10</option>
            <option value="false">Less 10</option>
          </select>
	    },
    ];
	}

  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
  }

	render() {
    const { activePage } = this.state;
    return (
      <div>
        <TableSimple
          makeData={ this.makeData }
          makeColumns={ this.makeColumns }
          activePage={ activePage }
          totalData={ 200 }
          handlePageChange={ this.handlePageChange }
          isPagination={ true }
				/>
			</div>
		);
	};
}

export default HomePage;
