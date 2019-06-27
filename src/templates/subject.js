import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

export default ({ data: { markdownRemark: context, allMarkdownRemark: { edges: courses } } }) => (
  <Layout x={context.fields.learn}>
    <div dangerouslySetInnerHTML={{ __html: context.html }} />
    <div>
      <h1>Learn {context.fields.learn.replace("-", " ")} as...</h1>
      <ul>
      { 
        courses.map(({ node }) => (
          <li>
            <Link to={`/learn/${node.fields.learn}/as/${node.fields.as}`}>{ node.fields.as.replace("-", " ")}</Link>
          </li>
        )) 
      }
      </ul>
    </div>
  </Layout>
);

export const query = graphql`
  query($learn: String!) {
    markdownRemark(fields: { learn: { eq: $learn }, as: { eq: null }, lesson: { eq: null } }) {      
      html
      fields {
        learn
      }
    }  
    allMarkdownRemark(filter: { fields: { learn: { eq: $learn }, as: { ne: null }, lesson: { eq: null } } }) {
      edges {
        node {
          fields {
            learn
            as
          }
        }
      }
    }  
  }
`;