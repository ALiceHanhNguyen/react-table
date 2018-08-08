import React from "react";
import './../../node_modules/font-awesome/css/font-awesome.min.css';

export const getSortedComponent = (props, sorted) => {
	console.log('**********', props, '%%%%%%%%', sorted);
	const id = props.column.id;
	let sortInfo = sorted.filter(item => item.id === id);
	let Sorted = <i className="fa fa-sort" />;
	if (sortInfo.length) {
	  if (sortInfo[0].desc === true) Sorted = <i className="fa fa-sort-desc" />;
	  if (sortInfo[0].desc === false) Sorted = <i className="fa fa-sort-asc" />;
	}
  return (
    <span>
      {props.column.headerText} {Sorted}
    </span>
  );
}