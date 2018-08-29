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

        return (
            <article>
                <Helmet />
                <div>
                    <CenteredSection>
                        {
                            data && data.groups ?
                                <div>
                                    <div>
                                        <Chart width={600} height={250} series={data.groups} minY={0}>
                                            <Bars
                                                colors={groupColor}
                                                groupPadding='10%'
                                                innerPadding='10%'
                                            />
                                        </Chart>
                                    </div>
                                    <div
                                        style={{
                                            width: '600px',
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
                                        <div>
                                            <div class="score-value" style={{ color: groupColor[0], fontSize: 30, fontWeight: '700' }}>{data.groups[0].data[0]}</div>
                                            <div>{data.groups[0].label}</div>
                                        </div>
                                        <div>
                                            <div class="score-value" style={{ color: groupColor[1], fontSize: 30, fontWeight: '700' }}>{data.groups[1].data[0]}</div>
                                            <div>{data.groups[1].label}</div>
                                        </div>
                                        <div>
                                            <div class="score-value" style={{ color: groupColor[2], fontSize: 30, fontWeight: '700' }}>{data.groups[2].data[0]}</div>
                                            <div>{data.groups[2].label}</div>
                                        </div>
                                        <div>
                                            <div class="score-value" style={{ color: groupColor[3], fontSize: 30, fontWeight: '700' }}>{data.groups[3].data[0]}</div>
                                            <div>{data.groups[3].label}</div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div>
                                    <img height="350" src={require('./../../images/downloading.gif')} />
                                </div>
                        }

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
