import React from 'react';
// import PropTypes from 'prop-types';
import { Table, Label, Input } from 'reactstrap';
import './../../assets/css/reactstrap.css';

const RankingTool = () => {
    const text = 'Get inspired by daring Vietnamese women, reflect on war and peace,<br /> mingle with the crowds and experience tranquility in Hanois double-decker tour.'
    return (
        <div className='io-ranking-tool'>
            <Table responsive bordered>
                <thead>
                  <tr>
                    <th rowSpan='2'>Category</th>
                    <th colSpan='5'>Score</th>
                    <th rowSpan='2'>Weighted<br />Score</th>
                  </tr>
                  <tr>
                    <th>10</th>
                    <th>7</th>
                    <th>4</th>
                    <th>1</th>
                    <th>0</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan='2'>
                        <div className='label-category'>Rijk Matix</div>
                        <div className='percent-category red'>15%</div>
                    </td>
                    <td>
                        <Label><Input type='radio' name='radio1' /></Label>
                        <div className='sub-title'>Beneficical</div>
                        <div className='text' dangerouslySetInnerHTML={ { __html: text } } />
                    </td>
                    <td>
                        <Label><Input type='radio' name='radio1' /></Label>
                        <div className='sub-title'>Beneficical</div>
                        <div className='text'>Yellow</div>
                    </td>
                    <td>
                        <Label><Input type='radio' name='radio1' /></Label>
                        <div className='sub-title'>Beneficical</div>
                        <div className='text'>Yellow</div>
                    </td>
                    <td>
                        <Label><Input type='radio' name='radio1' /></Label>
                        <div className='sub-title'>Beneficical</div>
                        <div className='text'>Yellow</div>
                    </td>
                    <td>
                        <Label><Input type='radio' name='radio1' /></Label>
                        <div className='sub-title'>Beneficical</div>
                        <div className='text'>Yellow</div>
                    </td>
                    <td className='percent-category' rowSpan='2'>15</td>
                  </tr>
                  <tr>
                    <td colSpan='5' className='comment'>
                        <Label>Comment</Label>
                        <Input type='text' />
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan='2'>
                        <div className='label-category'>Risk Beneficical Beneficical Matix</div>
                        <div className='percent-category red'>15%</div>
                    </td>
                    <td>
                        <Label><Input type='radio' name='radio1' /></Label>
                        <div className='sub-title'>Beneficical</div>
                        <div className='text' dangerouslySetInnerHTML={ { __html: text } } />
                    </td>
                    <td>
                        <Label><Input type='radio' name='radio1' /></Label>
                        <div className='sub-title'>Beneficical</div>
                        <div className='text'>Yellow</div>
                    </td>
                    <td>
                        <Label><Input type='radio' name='radio1' /></Label>
                        <div className='sub-title'>Beneficical</div>
                        <div className='text'>Yellow</div>
                    </td>
                    <td>
                        <Label><Input type='radio' name='radio1' /></Label>
                        <div className='sub-title'>Beneficical</div>
                        <div className='text'>Yellow</div>
                    </td>
                    <td>
                        <Label><Input type='radio' name='radio1' /></Label>
                        <div className='sub-title'>Beneficical</div>
                        <div className='text'>Yellow</div>
                    </td>
                    <td className='percent-category' rowSpan='2'>15</td>
                  </tr>
                  <tr>
                    <td colSpan='5' className='comment'>
                        <Label>Comment</Label>
                        <Input type='text' />
                    </td>
                  </tr>
                </tbody>
              </Table>
        </div>
    );
};

// RankingTool.propTypes = {
// };

export default RankingTool;
