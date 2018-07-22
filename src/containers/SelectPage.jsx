import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MultiSelect from './components/MultiSelect';

const MAX_CONTRIBUTORS = 3;
const ASYNC_DELAY = 500;

class SelectPage extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.getContributors = this.getContributors.bind(this);
        this.options = [
            { label: 'Andorra', value: 'AD' },
            { label: 'Angola', value: 'AO' },
            { label: 'Anguilla', value: 'AI' },
            { label: 'Antarctica', value: 'AQ' },
            { label: 'Antigua and Barbuda', value: 'AG' },
            { label: 'Argentina', value: 'AR' },
            { label: 'Armenia', value: 'AM' },
            { label: 'Aruba', value: 'AW' },
            { label: 'Australia', value: 'AU' },
            { label: 'Austria', value: 'AT' },
            { label: 'Azerbaijan', value: 'AZ' },
            { label: 'Bahamas', value: 'BS' },
            { label: 'Bahrain', value: 'BH' },
            { label: 'Bangladesh', value: 'BD' },
            { label: 'イスラエル ', value: 'IL' }
        ];
        this.state = {
            valueSelect: '',
            value: [ this.options[0] ]
        };
    }

    render() {
        const { valueSelect, value } = this.state;
        return (
            <div style={ { padding: '20px' } }>
                <h1>Home</h1>
                <p>Welcome home!</p>
                <MultiSelect
                    valueSelect={ value }
                    handleChange={ this.handleChange }
                    getContributors={ this.getContributors } />
            </div>
        );
    }

    handleChange(field, value) {
        this.setState({ [field]: value});
    }

    getContributors (input, callback) {
        input = input.toLowerCase();
        var options = this.options.filter(i => {
            return i.label.toLowerCase().substr(0, input.length) === input;
        });
        var data = {
            options: options.slice(0, MAX_CONTRIBUTORS),
            complete: options.length <= MAX_CONTRIBUTORS
        };
        setTimeout(function() {
            callback(null, data);
        }, ASYNC_DELAY);
    }
}

export default SelectPage;
/***** onValueClick prop was used when click in each item ******/
// this.gotoContributor = this.gotoContributor.bind(this);

// this.CONTRIBUTORS = [
//     { github: 'jedwatson', name: 'Jed Watson' },
//     { github: 'bruderstein', name: 'Dave Brotherstone' },
//     { github: 'jossmac', name: 'Joss Mackison' },
//     { github: 'jniechcial', name: 'Jakub Niechciał' },
//     { github: 'craigdallimore', name: 'Craig Dallimore' },
//     { github: 'julen', name: 'Julen Ruiz Aizpuru' },
//     { github: 'dcousens', name: 'Daniel Cousens' },
//     { github: 'jgautsch', name: 'Jon Gautsch' },
//     { github: 'dmitry-smirnov', name: 'Dmitry Smirnov' }
// ];

// gotoContributor={ this.gotoContributor }

// gotoContributor (value, event) {
//     console.log('&&&&&&&&&&&', value, event);
// }
    
/***** valueKey, labelKey was used when identify label and value of Data. ******/


                // <SelectState
                //     options={ this.options }
                //     valueSelect={ valueSelect }
                //     handleChangeSelect={ this.handleChangeSelect } />