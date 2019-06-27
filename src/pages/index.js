import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import css from "@emotion/css";

export default () => (
  <Layout>
    <SEO title="Home" />
    <p>
      <em>Everyone is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.</em>
    </p>
    <p>Albert Einstein</p>
    <h1>What is this?</h1>
    <p>
      <b>learn <span css={css`color: red;`}>x</span> as <span css={css`color: green;`}>y</span></b> is built on the idea that anyone can learn anything
      if it is taught correctly. The way that an artist learns a new concept will be fundamentally different than the way that a biologist learns that 
      same concept. By creating lessons and resources that leverage individuals' existing intuitions and experience, we can create a more personalized 
      learning experience.
    </p>
    <p>
      Check out our <Link to="/learn">catalog</Link> of subjects to start learning!
    </p>
  </Layout>
);