import React from "react"
import styles from "./photography.module.scss"
import italyImage1 from "../images/photography/italy_1.png"
import italyImage2 from "../images/photography/italy_2.png"
import italyImage3 from "../images/photography/italy_3.png"
import italyImage4 from "../images/photography/italy_4.png"

const Photography = () => {
  return (
    <section className={styles.photography} id={"photography"}>
      <div className={styles.photography__wrapper}>
        <h2 className={styles.title}>
          Photography
        </h2>
        <p className={styles.text}>
          Here is a collection of my best travel pictures that I took while travelling places all around the world.
        </p>
        <div className={styles.buttons}>
          <button className={`${styles.button} ${styles.active}`}>ITALY</button>
          <button className={styles.button}>AUSTRALIA</button>
          <button className={styles.button}>INDIA</button>
          <button className={styles.button}>BRAZIL</button>
        </div>
        <div className={styles.images}>
          <img src={italyImage1} alt="" />
          <img src={italyImage2} alt="" />
          <img src={italyImage3} alt="" />
          <img src={italyImage4} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Photography
