import React, { FC } from "react";
import Title from "./Title";
import Project from "./Project";
import { Link } from "gatsby";

interface ProjectProps {
  title: string;
  showLink?: boolean;
  projects: any;
}

const Projects: FC<ProjectProps> = (props: ProjectProps) => {
  const { projects, title, showLink } = props;
  return (
    <section className="section projects">
      <Title title={title}/>
      <div className="section-center projects-center">
        {projects.map((project: any, index: number) => {
          return <Project key={project.id} index={index} {...project}/>
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  );
}

export default Projects;
