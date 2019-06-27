import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, Link } from "gatsby";

export default ({ data: { allMarkdownRemark: { edges: subjects } } }) => (
  <Layout>
    <SEO title="Catalog" />
    <h1>Learn...</h1>
    <ul>
    { 
      subjects.map(({ node }) => (
        <li>
          <Link to={`/learn/${node.fields.learn}`}>{ node.fields.learn.replace("-", " ")}</Link>
        </li>
      )) 
    }
    </ul>
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fields: { as: { eq: null }, lesson: { eq: null} } }) {
      edges {
        node {
          fields {
            learn
          }
        }
      }
    }  
  }
`;