import React from 'react';
import { FormattedMessage } from 'react-intl';

// import A from './A';
// import Img from './Img';
// import NavBar from './NavBar';
// import HeaderLink from './HeaderLink';
// import Banner from './banner.jpg';
// import messages from './messages';

import H1 from 'components/H1';
import styled from 'styled-components';

const CenteredSection = styled.section`
  text-align: center;
  margin: 3em auto;

  &:first-child {
    margin-top: 0;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        {/* <A href="https://twitter.com/mxstbr">
          <Img src={Banner} alt="react-boilerplate - Logo" />
        </A>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
        </NavBar> */}
        <CenteredSection>
          <H1>主日学</H1>
        </CenteredSection>
      </div>
    );
  }
}

export default Header;
