import React, { FC } from "react";
import { Link } from "gatsby";
import { ISocialLink, socialLinks } from "../constants/social_links";
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import COLORS from "../assets/styleHelpers/colors";
import {
  button,
  sectionCenter,
  underline,
} from "../assets/styleHelpers/styleMixins";
import { media } from "../assets/styleHelpers/breakpoints";
import { SocialLink, SocialLinks } from "../assets/styleHelpers/components";

const HeroWrapper = styled.header`
  h4 {
    line-height: 1;
    font-size: 1rem;
  }

  ${media.desktop2`
    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 60%;
      right: 0;
      bottom: 0;
      background: var(--clr-white);
    }

    h4 {
      font-size: 0.85rem;
    }
  `};

  margin-top: -5rem;
  padding-top: 5rem;
  height: 100vh;
  background: ${COLORS.primary10};
  position: relative;
`;

const HeroCenter = styled.section`
  ${sectionCenter()};
  height: 100%;
  display: grid;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  ${media.desktop2`
    grid-template-columns: repeat(12, 1fr);
  `};
`;

const HeroUnderline = styled.div`
  ${underline()};
  margin-bottom: 0.5rem;
  margin-left: 0;
`;

const HeroInfo = styled.article`
  background: ${COLORS.primary10};
  grid-column: 1 / span 8;

  ${media.desktop2`
    grid-row: 1/1;
  `};
`;

const HeroLink = styled(Link)`
  ${button()};
  margin-top: 1.25rem;
`;
const Hero: FC = () => {
  return (
    <HeroWrapper>
      <HeroCenter>
        <HeroInfo>
          <div>
            <HeroUnderline></HeroUnderline>
            <h1>I'm Radek</h1>
            <h4>Junior React and Salesforce Web Developer</h4>
            <HeroLink to="/contact">contact me</HeroLink>
            <SocialLinks>
              {socialLinks.map((link: ISocialLink) => {
                return (
                  <SocialLink key={link.id} href={link.url}>
                    {link.icon}
                  </SocialLink>
                );
              })}
            </SocialLinks>
          </div>
        </HeroInfo>
        <StaticImage
          src="../assets/images/hero.svg"
          alt="portfolio"
          class="hero-img-svg"
          placeholder="blurred"
        />
      </HeroCenter>
    </HeroWrapper>
  );
};

export default Hero;
