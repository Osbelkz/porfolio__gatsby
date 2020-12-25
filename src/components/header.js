import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.scss"
import headerLogo from "../images/svg/Vector.svg"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.header__wrapper}>
      <Link className={styles.logo}
        to="/">
        <img src={headerLogo} alt="" />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}><a href="">Experience</a></li>
          <li className={styles.item}><a href="">Work</a></li>
          <li className={styles.item}><a href="">Photography</a></li>
          <li className={styles.item}><a href="">Contact</a></li>
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
