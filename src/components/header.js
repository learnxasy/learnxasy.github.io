import { css } from "@emotion/core";
import styled from "@emotion/styled";
import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby";

const X = styled.span`
  color: red;
`;

const Y = styled.span`
  color: green;
`;

const linkStyle = css`
  text-decoration: none;
  color: inherit;
`;

const Header = ({ x, y }) => (
  <header
    css={css`
      margin-bottom: 1.45rem;
    `}
  >
    <div
      css={css`
        margin: 0 auto;
        max-width: 960px;
        padding: 1.45rem 1.0875rem;
      `}
    >
      <h1
        css={css`
          margin: 0;
          color: #333;
          text-decoration: none;
        `}
      >
        <Link to="/" css={linkStyle}>learn</Link>&nbsp;
        <Link to={x === `x` ? `/learn` : `/learn/${x}`} css={linkStyle}><X>{x.replace(`-`, ` `)}</X></Link> as&nbsp;
        <Link to={x === `x` ? `/learn` : (y === `y` ? `/learn/${x}` : `/learn/${x}/as/${y}`)} css={linkStyle}><Y>{y.replace(`-`, ` `)}</Y></Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  x: PropTypes.string,
  y: PropTypes.string,
}

Header.defaultProps = {
  x: `x`,
  y: `y`,
}

export default Header
