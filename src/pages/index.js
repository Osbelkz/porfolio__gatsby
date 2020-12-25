import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Experience from "../components/experience"
import Philosophy from "../components/philosophy"
import Skillset from "../components/skillset"

const IndexPage = () => (
  <Layout>
    {/*<SEO title="Home" />*/}
    <Hero/>
    <Experience/>
    <Philosophy/>
    <Skillset/>
      <Image />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
