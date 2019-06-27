import React from "react";
import { graphql, Link } from "gatsby";
import { css } from "@emotion/core";
import Layout from "../components/layout";

export default ({ data: { markdownRemark: context } }) => (
  <Layout x={context.fields.learn} y={context.fields.as}>
    <Link to={`/learn/${context.fields.learn}/as/${context.fields.as}`}>Back to lessons</Link>
    <div
      css={css`
        margin-top: 25px;
      `}
    >
      <h1>Lesson {context.frontmatter.lessonNumber}: {context.frontmatter.title}</h1>
      <div 
        dangerouslySetInnerHTML={{ __html: context.html }} 
      />
    </div>
  </Layout>
);

export const query = graphql`
  query($learn: String!, $as: String!, $lesson: String!) {
    markdownRemark(fields: { learn: { eq: $learn }, as: { eq: $as }, lesson: { eq: $lesson } }) {      
      html
      frontmatter {
        title
        lessonNumber
      }
      fields {
        learn
        as
      }
    }  
  }
`;