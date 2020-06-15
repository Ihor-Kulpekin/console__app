import React from 'react';
import {StyledLink} from '../../styled-components/StyledLink';

const LinkGit = ({href, name, className}) => (
  <StyledLink href={href} className={className} target="_blank">{name}</StyledLink>
);

export default LinkGit;