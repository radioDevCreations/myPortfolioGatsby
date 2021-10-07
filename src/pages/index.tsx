import React, { FC } from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";
import SEO from "../components/SEO";
import Layout from "../components/Layout";

const IndexPage: FC = (props: any) => {
  const {
    allContentfulProject: {
    nodes: projects
  }
} = props.data;

  return (
    <>
      <main>
        <Hero />
        <Services />
        <Jobs />
        <Projects 
        title="featured-projects" 
        showLink 
        projects={projects}/>
      </main>
    </>
  )
}

export const query = graphql`
  {
    allContentfulProject(filter: {featured: {eq: true}}) {
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

export default IndexPage;
