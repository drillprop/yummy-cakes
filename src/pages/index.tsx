import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import HomeHero from "../components/Homepage/HomeHero"

const IndexPage = () => (
  <Layout>
    <HomeHero />
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
