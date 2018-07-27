import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RankingTool from './components/RankingTool';

class SelectPage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div style={ { padding: '20px' } }>
                <RankingTool />
            </div>
        );
    }
}

export default SelectPage;
