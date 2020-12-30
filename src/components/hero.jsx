import React from "react"
import styles from "./hero.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"


const Hero = () => {

  const data = useStaticQuery(graphql`
    query MyQuery {
      file(name: {eq: "burningparrot-ydhYTvAx3-A-unsplash"}) {
        id
        childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className={styles.hero}>
      <div className={styles.hero__wrapper}>
        <div className={styles.row}>
          <Img className={styles.photo} fluid={data.file.childImageSharp.fluid}/>
          <div className={styles.description}>
            <div className={styles.title}>
              <span>I’m Robin Williams. </span>
              <span>A Product Designer </span>
              <span>based in Italy.</span>
            </div>
            <p className={styles.subtitle}>I’m probably the most passionate designer you will ever get to work with. If
              you have a great project that needs some amazing skills, I’m your guy.</p>


          </div>
        </div>
        <div className={styles.rectangle}></div>
      </div>

    </section>
  )
}

export default Hero
