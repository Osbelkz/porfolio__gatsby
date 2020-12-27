import React from "react"
import styles from "./philosophy.module.scss"
import glass_ball from "../images/philosophy/glass_ball.jpg"
import glass_ball_w320 from "../images/philosophy/glass_ball_w320.png"

const Philosophy = () => {
  return (
    <section className={styles.philosophy}>
      <div className={styles.philosophy__wrapper}>
        <div className={styles.text}>
          <h2 className={styles.title}>
            Philosophy & values
          </h2>
          <p className={styles.description}>
            I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality.
          </p>
          <button className={styles.button}>
            More about me
          </button>
        </div>
          <img className={styles.img} src={glass_ball_w320} alt="" />
      </div>
    </section>
  )
}

export default Philosophy
