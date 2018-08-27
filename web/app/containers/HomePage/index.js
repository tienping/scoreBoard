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

import CenteredSection from './CenteredSection';
import { makeSelectFirebaseData } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchTodo, addTodo } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentWillMount() {
    this.props.dispatch(fetchTodo({}));
    // this.props.dispatch(addTodo('asdfsadfds'));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.firebaseRef.push({
      text: this.state.text
    });
    this.setState({text: ""});
  }

  render() {
    const { data } = this.props;

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
                                            colors={['gray', 'tomato', 'violet', 'lightgreen']}
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
                                        borderTop: '2px solid chocolate',
                                    }}
                                >
                                    <span>{data.groups[0].label}</span>
                                    <span>{data.groups[1].label}</span>
                                    <span>{data.groups[2].label}</span>
                                    <span>{data.groups[3].label}</span>
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
