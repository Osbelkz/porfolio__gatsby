import React from "react"
import styles from "./dribbble.module.scss"
import dribbbleImage from "../images/dribbble/dribbble.png"

const Dribbble = () => {
  return (
    <section className={styles.dribbble}>
      <div className={styles.dribbble__wrapper}>
        <h2 className={styles.title}>Dribbble</h2>
        <p className={styles.text}>Each dribbble shot is made with love and care. Do check out my work on Dribbble. Likes and comments are appreciated.</p>
        <button className={styles.button}>Follow me on Dribbble</button>
        <img className={styles.image} src={dribbbleImage} alt="" />
      </div>
    </section>
  )
}

export default Dribbble
