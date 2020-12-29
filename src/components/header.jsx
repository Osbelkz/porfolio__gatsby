import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styles from "./header.module.scss"
import headerLogo from "../images/svg/Vector.svg"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Header = ({ siteTitle }) => {

  const [toggle, setToggle] = useState(false)

  const setToggleFalse = () => {
    setToggle(false)
  }

  return <header className={styles.header}>
    <div className={styles.header__wrapper}>
      {toggle && <div onClick={setToggleFalse} className={styles.backdrop}/>}
      <Link className={styles.logo}
            to="/">
        <img src={headerLogo} alt="" />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.list} style={toggle ? {top: 0} : {top: "-50rem"}}>
          <li className={styles.item}><AnchorLink to={"/#experience"} title={"Experience"} onAnchorLinkClick={setToggleFalse} /></li>
          <li className={styles.item}><AnchorLink to={"/#projects"} title={"Work"} onAnchorLinkClick={setToggleFalse} /></li>
          <li className={styles.item}><AnchorLink to={"/#photography"} title={"Photography"} onAnchorLinkClick={setToggleFalse} /></li>
          <li className={styles.item}><AnchorLink to={"/#contacts"} title={"Contact"} onAnchorLinkClick={setToggleFalse} /></li>
        </ul>
        <div className={styles.toggle} onClick={() => setToggle(!toggle)}>

        </div>
      </nav>

    </div>
  </header>
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
