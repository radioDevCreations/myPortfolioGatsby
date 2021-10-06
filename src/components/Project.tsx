import React, { FC } from "react"
import { GatsbyImage, IGatsbyImageData, getImage} from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"

interface ProjectProps{
  description: string;
  title: string;
  slug: string;
  github: string;
  stack: string[];
  url: string;
  image: any;
  index: number;
}

const Project: FC<ProjectProps> = (props: ProjectProps) => {
  const {
    description,
    title,
    slug,
    github,
    stack,
    url,
    image,
    index,
  } = props;

  const imageData = image.localFile.childrenImageSharp[0].gatsbyImageData;

  return (
  <article className="project">
    <GatsbyImage 
    image={imageData}
    alt={title} 
    className="project-img"
    />
    <div className="project-info">
      <span className="project-number">
        0{index + 1}.
      </span>
      <Link to={`/projects/${slug}`} className="project-slug">
        <h3>{title}</h3>
      </Link>
      <p className="project-desc">
        {description}
      </p>
      <div className="project-stack">
        {stack.map((item: any) => {
          return (
            <span key={item.id}>{item.title}</span>
          );
        })}
      </div>
      <div className="project-links">
        <a href={github}>
          <FaGithubSquare className="project-icon"></FaGithubSquare>
        </a>
        <a href="project-icon">
          <FaShareSquare className="project-icon"></FaShareSquare>
        </a>
      </div>
    </div>
  </article>
  );
}

export default Project;
