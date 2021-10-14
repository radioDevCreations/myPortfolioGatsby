import React, { FC, useState } from "react";
import Title from "./Title";
import { FaAngleDoubleRight } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

const Jobs: FC = () => {

  const [value, setValue] = useState(0);

  const data = useStaticQuery(query);
  const {
    allContentfulJob: {
      nodes: jobs
    }
  } = data;

  const {company, position, date, description} = jobs[value];

  return <section className="section jobs">
    <Title title="experience"/>
    <div className="jobs-center">
      <div className="btn-container">
        {jobs.map((item: any, index: number) => {
          return (
            <button 
            key={index} 
            className={index === value ? "job-btn active-btn" : "job-btn"} 
            onClick={() => setValue(index)}>
              {item.company}
            </button>
          );
        })}
      </div>
      <article className="job-info">
        <h3>{position}</h3>
        <h4>{company}</h4>
        <p className="job-date">
          {date}
        </p>
        {description.content.map((item: string, index: number) => {
          return <div key={index} className="job-desc">
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
            <p>{item}</p>
          </div>
        })}
      </article>
    </div>
    <Link to="/about" className="btn center-btn">
      more info
    </Link>
  </section>
}

export const query = graphql`
  {
    allContentfulJob {
      nodes {
        company
        position
        date
        description {
          content
        }
      }
    }
  }
`;

export default Jobs;
