import React, { FC } from "react";
import { graphql } from "gatsby";
import Title from "../components/Title";
import SEO from "../components/SEO";

const About: FC = (props: any) => {
  
const {
  data: { 
    strapiAbout: {title, image, info, stack}
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
              {stack.map((item: any) => {
                return (
                  <span key={item.id}>{item.title}</span>
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
  {
    strapiAbout {
      info
      title
      stack {
        id
        title
      }
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`;

export default About;
