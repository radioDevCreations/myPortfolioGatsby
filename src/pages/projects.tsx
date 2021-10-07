import React, { FC } from "react";
import { graphql } from "gatsby";
import Projects from "../components/Projects";
import SEO from "../components/SEO";
const ProjectsPage: FC = (props: any) => {
  
  const {data: {
    allContentfulProject: {
      nodes: projects
    } 
  }} = props;
  
  return (
    <>
      <main>
        <section className="projects-page">
          <Projects title="all projects" projects={projects}/>
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  {
    allContentfulProject {
      nodes {
        github
        featured
        description {
          description
        }
        id
        url
        slug
        title
        tags
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`;

export default ProjectsPage;
