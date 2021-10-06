import React, { FC } from "react";
import { Link } from "gatsby";
import SEO from "../components/SEO";

const Error: FC = () => {
  return (
    <>
      <main className="error-page">
        <div className="error-container">
          <h1>oops it's a dead endpoint :(</h1>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </>
  );
}

export default Error;
