import React, { FC } from "react";
import { graphql } from "gatsby";
import SEO from "../../components/SEO";

const ProjectTemplate: FC = (props: any) => {
    const {pageContext: {
        title
    }, data} = props;
    return (
        <main className="project-template-page">
            <h2>{title}</h2>
            <p>{data.contentfulProject.description.description}</p>
        </main>
    );
}

export const query = graphql`
  query getSingleProject($title: String) {
    contentfulProject(title: {eq: $title}) {
      description {
        description
      }
      title
      image {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
  }
`;  

export default ProjectTemplate;