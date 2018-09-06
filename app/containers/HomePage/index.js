/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { Chart, Bars } from 'rumble-charts';

import CenteredSection from 'components/CenteredSection';
import LogTable from 'components/LogTable';
import { makeSelectFirebaseData } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { dataRef } from "./../../utils/firebase";

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
    state = {
        data: {},
    }

    componentWillMount() {
        const _this = this;
        function updateData(snapshot) {
            _this.setState({ data: snapshot.val() });
        }
        dataRef.on('value', function (snapshot) {
            if (snapshot.exists()) {
                updateData(snapshot);
            }
        });
    }

    render() {
        const { data } = this.state;

        const groupColor = ['red', 'gold', 'blue', 'green'];
        const chartWidth = window.innerWidth > 600 ? 600 : window.innerWidth* 0.8;

        return (
            <article>
                <Helmet />
                <div>
                    <CenteredSection>
                        {
                            data && data.groups ?
                                <div>
                                    <div>
                                        <Chart width={chartWidth} height={250} series={data.groups} minY={0}>
                                            <Bars
                                                colors={groupColor}
                                                groupPadding='10%'
                                                innerPadding='10%'
                                            />
                                        </Chart>
                                    </div>
                                    <div
                                        style={{
                                            width: chartWidth,
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-around',
                                            padding: '10px 3%',
                                            margin: '0px auto',
                                            left: '0',
                                            right: '0',
                                            borderTop: '5px solid black',
                                        }}
                                    >
                                        {
                                            data.groups && data.groups.length ?
                                                data.groups.map((group, index) => (
                                                    <div>
                                                        <div className="score-value" style={{ color: groupColor[index], fontSize: 30, fontWeight: '700' }}>{group.data[0]}</div>
                                                        <div>{group.label}</div>
                                                    </div>
                                                ))
                                                :
                                                <div>No group found</div>
                                        }
                                    </div>
                                </div>
                                :
                                <div>
                                    <img height="350" src={require('./../../images/downloading.gif')} />
                                </div>
                        }

                        <hr style={{ margin: '10% 0' }} />

                        <LogTable list={data.groups} />

                    </CenteredSection>
                </div>
            </article>
        );
    }
}

HomePage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    data: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
    data: makeSelectFirebaseData(),
});

export function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
