import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Uh oh...</h1>
    <p>Looks like the page you're looking for doesn&#39;t exist. Sorry!</p>
  </Layout>
)

export default NotFoundPage
