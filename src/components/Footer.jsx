import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Tombstone from '../assets/tombstone-alt.svg';

// Import Styled Components
import { FooterContainer, FlexWrap } from './Footer.atoms';
import PressCoverage from './PressCoverage';

// Images
import TWITTER from '../assets/twitter.svg';
import GITHUB from '../assets/github.svg';

const SocialLink = ({ url, imgSrc, altText }) => {
  const style = {
    border: 'none',
  };

  return (
    <a style={style} href={url}>
      <img src={imgSrc} alt={altText} />
    </a>
  );
};

SocialLink.propTypes = {
  url: PropTypes.string.isRequired,
  imgSrc: PropTypes.node.isRequired,
  altText: PropTypes.string.isRequired,
};

const CopyNotice = styled.div`
  font-size: 0.75em;
  text-align: center;
  margin: 30px 0 20px 0;
`;

const TombstoneStyle = {
  width: '60px',
  marginRight: '10px',
};

const Title = styled.div`
  font-size: 2.5em;
  color: #fafafa;
  font-weight: lighter;
`;

const FooterTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`;

const SocialWrapper = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: center;
  a {
    display: block;
    margin: 0 10px;
  }
`;

export default () => (
  <>
    <FooterContainer>
      <FlexWrap>
        <FooterTitle>
          <img style={TombstoneStyle} src={Tombstone} alt="Tombstone" />
          <Title>Dead Company Names</Title>
        </FooterTitle>
        <div>
          <p>
            List of all the names and apps we've been through. Forked off Killed By Google (awesome
            stuff, check them out).
          </p>
        </div>
        <CopyNotice>
          <a href="https://github.com/codyogden/killedbygoogle/blob/master/LICENSE">
            &copy; 2019 Cody Ogden.
          </a>
        </CopyNotice>
        <SocialWrapper>
          <SocialLink
            url="https://github.com/codyogden/killedbygoogle"
            altText="GitHub"
            imgSrc={GITHUB}
          />
          <SocialLink url="https://twitter.com/killedbygoogle" altText="Twitter" imgSrc={TWITTER} />
        </SocialWrapper>
      </FlexWrap>
    </FooterContainer>
  </>
);
