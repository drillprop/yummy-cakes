import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHero from "../components/Homepage/HomeHero"

const IndexPage = () => (
  <Layout>
    <HomeHero />
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
