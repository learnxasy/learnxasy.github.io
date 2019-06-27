import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

export default ({ data: { markdownRemark: context, allMarkdownRemark: { edges: lessons } } }) => (
  <Layout x={context.fields.learn} y={context.fields.as}>
    <div dangerouslySetInnerHTML={{ __html: context.html }} />
    <div>
      <h1>Lessons</h1>
      <ul>
      { 
        lessons.map(({ node }) => (
          <li>
            <Link to={`/learn/${node.fields.learn}/as/${node.fields.as}/${node.fields.lesson}`}>{ `Lesson ${node.frontmatter.lessonNumber}: ${node.frontmatter.title}` }</Link>
          </li>
        )) 
      }
      </ul>
    </div>
  </Layout>
);

export const query = graphql`
  query($learn: String!, $as: String!) {
    markdownRemark(fields: { learn: { eq: $learn }, as: { eq: $as }, lesson: { eq: null } }) {      
      html      
      fields {
        learn
        as
      }
    }  
    allMarkdownRemark(filter: { fields: { learn: { eq: $learn }, as: { eq: $as }, lesson: { ne: null } } }, sort: { fields: [frontmatter___lessonNumber], order: ASC }) {
      edges {
        node {
          frontmatter {
            title
            lessonNumber
          }
          fields {
            learn
            as
            lesson
          }
        }
      }
    }  
  }
`;