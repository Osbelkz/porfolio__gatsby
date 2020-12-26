import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Experience from "../components/experience"
import Philosophy from "../components/philosophy"
import Skillset from "../components/skillset"
import Companies from "../components/companies"
import Projects from "../components/projects"
import Instagram from "../components/instagram"
import Dribbble from "../components/dribbble"
import Testimonials from "../components/testimonials"
import Photography from "../components/photography"
import Contacts from "../components/contacts"

const IndexPage = () => (
  <Layout>
    {/*<SEO title="Home" />*/}
    <Hero/>
    <Experience/>
    <Philosophy/>
    <Skillset/>
    <Companies/>
    <Projects/>
    <Instagram/>
    <Dribbble/>
    <Testimonials/>
    <Photography/>
    <Contacts/>
    {/*  <Image />*/}
    {/*<Link to="/page-2/">Go to page 2</Link> <br />*/}
    {/*<Link to="/using-typescript/">Go to "Using TypeScript"</Link>*/}
  </Layout>
)

export default IndexPage
