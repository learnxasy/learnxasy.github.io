/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";

import Header from "./header";
import "./layout.css";

const Layout = ({ x, y, children }) => {
  return (
    <>
      <Header x={x} y={y} />
      <div
        css={css`
          margin: 0 auto;
          max-width: 960px;
          padding: 0 1.0875rem 1.45rem;
          padding-top: 0;
        `}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
