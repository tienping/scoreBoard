/**
 *
 * LogTable
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { Row, Col, List } from 'antd';
import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/list/style/css';
import 'antd/lib/card/style/css';
import './../../utils/animate.css';

/* eslint-disable react/prefer-stateless-function */
class LogTable extends React.PureComponent {
    render() {
        const { list } = this.props;

        return (
            <div className="logTable">
                {/* <h3>Records</h3> */}
                {
                    list && list.length ?
                        <Row style={{ background: 'transparent', padding: '-3%' }}>
                            {
                                list.map((group, index) => (
                                    <Col span={6} key={index} style={{ padding: '1% 3%' }}>
                                        <h3 style={{ borderBottom: '2px solid black', paddingBottom: '0.2rem', marginBottom: '1rem' }}>{group.label}</h3>
                                        {
                                            group.log && group.log.length ?
                                                <div style={{ display: 'flex', flexDirection: 'column-reverse' }} >
                                                    {
                                                        group.log.map((log, index) => (
                                                            <div
                                                                key={index}
                                                                className="animated rubberBand"
                                                                style={{
                                                                    textAlign: 'left',
                                                                    background: 'white',
                                                                    margin: '2% 0',
                                                                    padding: '2% 5%',
                                                                    border: '1px solid #BBB',
                                                                    borderLeft: `5px solid ${log.value && log.value > 0 ? 'darkgreen' : '#F00'}`,
                                                                }}
                                                            >
                                                                <div className="" style={{  }}>
                                                                    <div style={{ fontWeight: 700, fontSize: '170%', color: log.value && log.value > 0 ? '040' : '#F00' }}>{`${ log.value && log.value > 0 ? '+' : ''}${log.value || 0}`}</div>
                                                                    <div style={{ fontSize: '150%', color: 'black' }}>{log.message || ''}</div>
                                                                    <div style={{ fontSize: '100%', color: '#AAA', position: 'absolute', top: 5, right: 5 }}>{log.time || ''}</div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                                :
                                                null
                                        }
                                    </Col>
                                ))
                            }
                        </Row>
                        :
                        <div>
                            No Record Found
                        </div>
                }
                {

                }
            </div>
        )
    }
}

LogTable.propTypes = {
    list: PropTypes.array.isRequired,
};

export default LogTable;
