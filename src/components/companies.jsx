import React from "react"
import styles from "./companies.module.scss"
import cbreLogo from "../images/companies/cbre.svg"
import epiqLogo from "../images/companies/epiq.svg"
import fLogo from "../images/companies/f.svg"
import leafLogo from "../images/companies/leaf.svg"
import forMomLogo from "../images/companies/aPlaceForMom.svg"
import mLogo from "../images/companies/m.svg"


const Companies = () => {

  const companies = [cbreLogo, epiqLogo, fLogo, leafLogo, forMomLogo, mLogo]

  return (
    <section className={styles.companies}>
      {companies.map( c => {
        return <div className={styles.company}>
          <img src={c} alt="" />
        </div>
      })}


    </section>
  )
}

export default Companies
