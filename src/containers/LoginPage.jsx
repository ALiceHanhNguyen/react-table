import React from "react";
import { render } from "react-dom";
import { Button } from 'react-bootstrap';
import Select from 'react-select';
import moment from 'moment';
import TableCustom from './components/TableCustom';
import { DATA, COUNTRY } from './../utils/data';
import './../../node_modules/font-awesome/css/font-awesome.min.css';
import "./../assets/css/app.css";
import "./../assets/css/select.css";
import { getSortedComponent } from "./text";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.handlePageChange = this.handlePageChange.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.updateDate = this.updateDate.bind(this);
    // this.getSortedComponent = this.getSortedComponent.bind(this);
    this.onSortedChange = this.onSortedChange.bind(this);
    this.state = {
      activePage: 1,
      selectValue: {},
      sorted: [],
    };
    this.makeData = DATA;
    this.makeColumns = [
      {
        Header: (props) => getSortedComponent(props, this.state.sorted),
        headerStyle: { boxShadow: "none" },
		    headerText: "ID",
        accessor: "id",
        Cell: row => ( <div className="pd-7-5 style-col" >{ row.value }</div> ),
        filterMethod: (filter, row) =>
                  String(row[filter.id]).startsWith(filter.value),
      },
      {
        Header: (props) => getSortedComponent(props, this.state.sorted),
        headerStyle: { boxShadow: "none" },
        headerText: "Email",
        accessor: "email",
        Cell: row => ( <div className="pd-7-5 style-col" >{ row.value }</div> ),
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
        Cell: row => (
          <div className="pd-7-5 style-col" >
            <span>{ row.value }</span>
            <Button bsStyle='success' className="float-right mr-5-7" onClick={ () => console.log('1') }>
              <i className="fa fa-spinner fa-spin" />
            </Button>
            <Button bsStyle='danger' className="float-right mr-5-7" onClick={ () => console.log('2') }>
              <i className="fa fa-spinner fa-spin" />
            </Button>
          </div> ),
	    },
	    {
	      Header: "Updated at",
        accessor: "updated_at",
        Cell: row => ( <div className="pd-7-5 style-col" >{ row.value }</div> ),
        filterMethod: (filter, row) =>
                  String(row[filter.id]).startsWith(filter.value),
	    },
	    {
	      Header: "Country",
        Cell: ({ original }) => (
  				<Select
						options={COUNTRY}
						value={this.state.selectValue[original.id]}
						onChange={(e) => this.updateValue(e, original)}
						simpleValue
					/> ),
	    },
      {
        Header: "Date",
        Cell: ({ original }) => (
          <div className="style-col"><input
            type="date"
            name="bday"
            className="date"
            defaultValue={ moment(new Date()).format('YYYY-MM-DD') }
            onChange={(e) => this.updateDate(e.target.value, original)}
          /></div>
        ),
      },
	    {
	      Header: "ID Sale",
        accessor: "sale_id",
	      Cell: row => (
          <div className="style-col color-white" style={{ backgroundColor: row.value > 10 ? '#85cc00' : row.value > 5 ? '#ffbf00' : '#ff2e00' }}>
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

  	// getSortedComponent(id) {
	  //   let sortInfo = this.state.sorted.filter(item => item.id === id);
	  //   if (sortInfo.length) {
	  //     if (sortInfo[0].desc === true) return <i className="fa fa-sort-desc" />;
	  //     if (sortInfo[0].desc === false) return <i className="fa fa-sort-asc" />;
	  //   }
	  //   return <i className="fa fa-sort" />;
	  // }

	// genericHeaderArrows(props) {
 //      const Sorted = getSortedComponent(props.column.id);
 //      return (
 //        <span>
 //          {props.column.headerText} {Sorted}
 //        </span>
 //      );
 //    };

  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
  }

  updateValue(newValue, original) {
    const { selectValue } = this.state;
    selectValue[original.id] = newValue;
	  this.setState({ selectValue });
  }

  updateDate(newValue, original) {
    const { dateValue } = this.state;
    console.log('*12', newValue);
    console.log('*13', original.id);
  }

  onSortedChange(sorted) {
  	this.setState({ sorted });
  }

  render() {
    const { activePage, sorted } = this.state;
    return (
      <div>
        <TableCustom
          makeData={ this.makeData }
          makeColumns={ this.makeColumns }
          activePage={ activePage }
          totalData={ 200 }
          handlePageChange={ this.handlePageChange }
          isPagination={ true }
          sorted={ sorted }
          onSortedChange={ this.onSortedChange }
        />
      </div>
    );
  };
}

export default LoginPage;
