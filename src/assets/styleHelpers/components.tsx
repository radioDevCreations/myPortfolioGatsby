import styled from "styled-components";
import COLORS from "./colors";
import _VAR from "./styleVariables";

export const SocialLinks = styled.div`
  margin-top: 2rem;
  width: 15rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

export const SocialLink = styled.a`
  font-size: 1.75rem;
  color: ${COLORS.grey1};
  -webkit-transition: ${_VAR.transition};
  -o-transition: ${_VAR.transition};
  transition: ${_VAR.transition};

  :hover {
    color: ${COLORS.primary5};
  }
`;
