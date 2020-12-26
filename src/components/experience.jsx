import React from "react"
import styles from "./experience.module.scss"


const Experience = () => {
  return (
    <section className={styles.experience} id={"experience"}>
      <div className={styles.experience__wrapper}>
        <h5 className={styles.experience__subtitle}>work experience</h5>
        <h2 className={styles.experience__title}>
          <span>Companies I have worked</span>
          <span>for in the past</span>
        </h2>
        <div className={styles.row}>
          <div className={styles.item}>
            <p className={styles.number}>01</p>
            <h3 className={styles.title}>
              <span>Google</span>, Interaction Designer
            </h3>
            <p className={styles.description}>
              I currently am the lead designer on the interaction design team for Google Play.
            </p>
          </div>
          <div className={styles.item}>
            <p className={styles.number}>02</p>
            <h3 className={styles.title}>
              <span>Facebook</span>, Product Designer
            </h3>
            <p className={styles.description}>
              I’ve worked on a wide variety of internal tools for facebook over the past 6 years.
            </p>
          </div>
          <div className={styles.item}>
            <p className={styles.number}>03</p>
            <h3 className={styles.title}>
              <span>Dribbble</span>, Graphic Designer
            </h3>
            <p className={styles.description}>
              I started my design career with Dribbble. I was incharge of creating illustrations for the platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
