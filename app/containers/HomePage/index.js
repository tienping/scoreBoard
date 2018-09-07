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

import CenteredSection from 'components/CenteredSection';
import LogTable from 'components/LogTable';
import BarChart from 'components/BarChart';
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
        dataRef.on('value', (snapshot) => {
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
                                    <div style={{ marginRight: '30', padding: '0 20%' }}>
                                        <BarChart list={data.groups} />
                                    </div>
                                </div>
                                :
                                <div>
                                    <img height="350" src={require('./../../images/downloading.gif')} />
                                </div>
                        }

                        {/* <hr style={{ margin: '10% 0' }} /> */}

                    </CenteredSection>

                    {
                        data.groups ?
                            <div style={{ padding: '0 5%' }}>
                                <LogTable list={data.groups} />
                            </div>
                            :
                            null
                    }
                </div>
            </article>
        );
    }
}

HomePage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    data: PropTypes.string,
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
