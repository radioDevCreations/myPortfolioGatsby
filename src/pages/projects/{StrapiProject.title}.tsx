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
            <p>{data.strapiProject.description}</p>
        </main>
    );
}

export const query = graphql`
query getSingleProject($title: String) {
    strapiProject(title: {eq: $title}) {
      description
      title
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`;  

export default ProjectTemplate;