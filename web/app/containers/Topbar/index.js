/**
 *
 * Topbar
 *
 */

import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
// import { sessionService } from 'redux-react-session';

import Navigator from 'components/Navigator';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

// import {
//     makeSelectTopNav,
//     makeSelectTopbarLoading,
//     // makeSelectTopbarError,
// } from './selectors';

import { fetchTopNav } from './actions';

const HershopTopbarTitle = styled.span`
    padding: 8px;
    font-weight: 900;
    letter-spacing: 5px;
    font-family: cursive;
    display: inline-block;
    color: ${(props) => props.theme.main_color};
`;

export const navItems = [
    {
        code: 'download',
        type: 'external_url',
        text: 'Download Mobile App',
        url: 'https://app.hermo.my/iLgE/SmWv2UnrhC',
        iconClass: 'fa fa-mobile text-white',
    },
    {
        code: 'notification',
        type: 'button',
        text: 'Notification',
        // url: '/notification',
        iconClass: 'fa fa-bell text-white',
    },
    {
        code: 'profile',
        type: 'dropdown',
        text: 'Profile',
        items: [
            {
                code: 'profileTitle',
                type: 'title',
                text: 'Profile',
            },
            {
                code: 'profileList',
                type: 'list',
                items: [{
                    code: 'profile',
                    text: 'Profile',
                    url: '/profile',
                }, {
                    code: 'order',
                    text: 'Order',
                    url: '/profile/order',
                }, {
                    code: 'voucher',
                    text: 'Voucher',
                    url: '/profile/voucher',
                }, {
                    code: 'logout',
                    text: 'Logout',
                    url: '/lougout',
                }],
            },
        ],
        iconClass: 'fa fa-user text-white',
    },
    {
        code: 'cart',
        type: 'dropdown',
        text: 'Cart',
        items: [
            {
                code: 'cartComponent',
                type: 'cart',
            },
        ],
        iconClass: 'fa fa-shopping-cart text-white',
    },
];

const HideHeader = styled.div`
    float: left;
    color: white;
    padding: 8px 16px;
`;

export class Topbar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    componentDidMount() {
        this.props.dispatch(fetchTopNav({}));
    }

    handleLinkClick() {}

    render() {
        return (
            <div className="text-center">
                <HideHeader><span className="fa fa-bars"></span></HideHeader>
                <HershopTopbarTitle>HERMO</HershopTopbarTitle>
                {<Navigator
                    items={navItems}
                    handleLinkClick={this.handleLinkClick}
                />}
            </div>
        );
    }
}

Topbar.propTypes = {
    dispatch: PropTypes.func.isRequired,
    // topNav: PropTypes.object,
    // loading: PropTypes.bool,
    // error: PropTypes.oneOfType([
    //     PropTypes.bool,
    //     PropTypes.object,
    // ]),
};

const mapStateToProps = createStructuredSelector({
    // topNav: makeSelectTopNav(),
    // loading: makeSelectTopbarLoading(),
    // error: makeSelectTopbarError(),
});

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'topbar', reducer });
const withSaga = injectSaga({ key: 'topnav', saga });

export default compose(
    withReducer,
    withSaga,
    withConnect,
)(Topbar);
