import React, { FC } from "react";
import { graphql } from "gatsby";
import Projects from "../components/Projects";
import SEO from "../components/SEO";
const ProjectsPage: FC = (props: any) => {
  
  const {data: {
    allStrapiProject: {
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
    allStrapiProject {
      nodes {
        github
        featured
        description
        id
        url
        slug
        title
        stack {
          id
          title
        }
        image {
          localFile {
            childrenImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
      totalCount
    }
  }
`;

export default ProjectsPage;
