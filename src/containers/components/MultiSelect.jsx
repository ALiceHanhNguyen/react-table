import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import 'react-select/dist/react-select.css';
import "./../../assets/css/react-select.css";

const MultiSelect = (props) => {
    const {
        valueSelect,
        handleChange,
        getContributors
    } = props;
    return (
        <Select.Async
            multi={ true }
            value={ valueSelect }
            onChange={ (value) => handleChange('value', value) }
            loadOptions={ getContributors } />
    );
};

MultiSelect.propTypes = {
    valueSelect: PropTypes.array,
    getContributors: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default MultiSelect;

/***** onValueClick prop was used when click in each item ******/
// gotoContributor,
// onValueClick={ gotoContributor }
// gotoContributor: PropTypes.func.isRequired,

/***** valueKey, labelKey was used when identify label and value of Data. ******/
// valueKey='github'
// labelKey='name'


