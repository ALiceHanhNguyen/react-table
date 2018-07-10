import React from "react";
import TableSimple from './components/TableSimple';
import { makeData } from './utils/data';
class HomePage extends React.Component {
	constructor() {
    	super();
    	this.state = {
      		data: makeData()
    	};
    	this.makeColumns = [
		    {
		      	Header: "Name",
		      	columns: [
		        	{
		        		Header: "First Name",
		          		accessor: "firstName"
		        	},
		        	{
		          		Header: "Last Name",
		          		id: "lastName",
		          		accessor: d => d.lastName
		        	}
		      	]
		    },
		    {
		      	Header: "Info",
		      	columns: [
		        	{
		          		Header: "Age",
		          		accessor: "age"
		        	},
		        	{
		          		Header: "Status",
		          		accessor: "status"
		        	}
		      	]
		    },
		    {
		      	Header: 'Stats',
		      	columns: [
		        	{
		          		Header: "Visits",
		          		accessor: "visits"
		        	}
		      	]
		    },
	    ];
  	}

	render() {
		const { data } = this.state;
		return (
			<div>
				<h2>Home</h2>
				<TableSimple
					makeData={ data }
					makeColumns={ this.makeColumns }
				/>
			</div>
		);
	};
}

export default HomePage;
