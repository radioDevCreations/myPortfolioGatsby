import React, { FC } from "react";
import { graphql } from "gatsby";
import Title from "../components/Title";
import SEO from "../components/SEO";

const About: FC = (props: any) => {
  
const {
  data: { 
    contentfulAbout: {title, image, info, tags}
  }
} = props;

  return (
    <>
      <section className="about-page">
        <div className="section-center about-center">
          <img src={image.localFile.publicURL} alt={title} className="about-img-svg"/>
          <article className="about-text">
            <Title title={title}/>
            <p>{info}</p>
            <div className="about-stack">
              {tags.map((item: any) => {
                return (
                  <span key={item}>{item}</span>
                );
              })}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
query getAbout {
  contentfulAbout(title: {eq: "About Me"}) {
    title
    info {
      info
    }
    image {
      gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
    }
    tags
  }
}

`;

export default About;
