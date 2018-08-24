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

    const series = [
      {
        data: [1],
      },
      {
        data: [2],
      },
      {
        data: [4],
      },
    ];

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
        </Helmet>
        <div>
          <div>{JSON.stringify(this.props.data)}</div>
          <CenteredSection>
            <Chart width={600} height={250} series={series} minY={0}>
              <Bars colors={['red', 'green', 'blue']} />
            </Chart>
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
