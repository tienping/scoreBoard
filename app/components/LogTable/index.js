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
import './animate.css';

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
                                            group.log ?
                                                <List
                                                    style={{  }}
                                                    grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}
                                                    dataSource={group.log.reverse()}
                                                    renderItem={(item) => (
                                                        <List.Item
                                                            className="animated rubberBand"
                                                            style={{
                                                                textAlign: 'left',
                                                                background: 'white',
                                                                margin: '2% 0',
                                                                padding: '2% 5%',
                                                                border: '1px solid #BBB',
                                                                borderLeft: `5px solid ${item.value && item.value > 0 ? '#0C0' : '#F00'}`,
                                                            }}
                                                        >
                                                            <div className="demo-loading-container" style={{  }}>
                                                                <div style={{ fontWeight: 700, fontSize: 18, color: item.value && item.value > 0 ? '#0C0' : '#F00' }}>{`${ item.value && item.value > 0 ? '+' : ''}${item.value || 0}`}</div>
                                                                <div style={{ fontSize: '70%', color: 'black' }}>{item.message || ''}</div>
                                                                <div style={{ fontSize: '70%', color: '#AAA', position: 'absolute', top: 5, right: 5 }}>{item.time || ''}</div>
                                                            </div>
                                                        </List.Item>
                                                    )}
                                                />
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
