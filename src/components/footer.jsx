import React from "react"
import styles from "./footer.module.scss"
import logo from "../images/svg/Vector.svg"
import twitterIcon from "../images/footer/twitter_icon.svg"
import dribbbleIcon from "../images/footer/dribbble_icon.svg"
import linkedInIcon from "../images/footer/linekedin_icon.svg"


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.body}>
          <div className={styles.about}>
            <div className={styles.logo}>
              <img src={logo} alt="" />
            </div>
            <div className={styles.social_networks}>
              <a className={styles.social_network} href="">
                <img src={twitterIcon} alt="" />
              </a>
              <a className={styles.social_network} href="">
                <img src={dribbbleIcon} alt="" />
              </a>
              <a className={styles.social_network} href="">
                <img src={linkedInIcon} alt="" />
              </a>
            </div>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.menu}>
              <li className={styles.link}><a href="">Home</a></li>
              <li className={styles.link}><a href="">About</a></li>
              <li className={styles.link}><a href="">Work</a></li>
              <li className={styles.link}><a href="">Process</a></li>
            </ul>
            <ul className={styles.menu}>
              <li className={styles.link}><a href="">Store</a></li>
              <li className={styles.link}><a href="">Blog</a></li>
              <li className={styles.link}><a href="">Reading List</a></li>
            </ul>
          </nav>
        </div>
        <div className={styles.copyright}>
          <p className={styles.text}>
            Not Copyright 2020 • Robin Williams. Webflow cloneable
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
