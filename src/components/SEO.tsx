import React, { FC } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

interface SEOProps {
  title: string;
}

const SEO: FC<SEOProps> = (props: any) => {
  const { title } = props;
  return <Helmet title={title}></Helmet>;
}

export default SEO;
