import React from "react"
import styles from "./instagram.module.scss"
import airplane from "../images/instagram/airplane.png"

const Instagram = () => {
  return (
    <section className={styles.instagram}>
      <div className={styles.instagram__wrapper}>
        <div className={styles.text}>
          <h2 className={styles.title}>
            Instagram
          </h2>
          <p className={styles.description}>
            If you area a person who enjoys photography, then I highly recommend that you check out my Instagram. I’m an avid traveller and I capture the best moments that I would love to cherish with the world          </p>
          <div>
            <button className={styles.button}>
              Follow me on IG
            </button>
          </div>
        </div>
          <img
            className={styles.img}
            src={airplane} alt="" />
      </div>
    </section>
  )
}

export default Instagram
