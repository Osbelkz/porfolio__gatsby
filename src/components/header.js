import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.scss"
import headerLogo from "../images/svg/Vector.svg"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.header__wrapper}>
      <Link className={styles.logo}
        to="/">
        <img src={headerLogo} alt="" />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}><AnchorLink  to={"/#experience"} title={"Experience"} /></li>
          <li className={styles.item}><AnchorLink  to={"/#projects"} title={"Work"}  /></li>
          <li className={styles.item}><AnchorLink  to={"/#photography"} title={"Photography"}  /></li>
          <li className={styles.item}><AnchorLink  to={"/#contacts"} title={"Contact"} /></li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
