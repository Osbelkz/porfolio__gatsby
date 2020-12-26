import React from "react"
import styles from './projects.module.scss'
import laptopPhoto from "../images/projects/laptop.png"
import phonePhoto from "../images/projects/phone.png"
import coinViewPhoto from "../images/projects/coinview.png"
import designPhoto from "../images/projects/design.png"


const Projects = () => {
  return (
    <section className={styles.projects} id={"projects"}>
      <div className={styles.projects__wrapper}>
        <div className={styles.projects__inner}>
          <div className={styles.head}>
            <h5 className={styles.subtitle}>
              MY PROJECTS
            </h5>
            <h2 className={styles.title}>
              <span>Work that I’ve done</span>
              <span>for the past 8 years</span>
            </h2>
          </div>
          <div className={styles.project}>
            <div className={styles.image}>
              <img src={laptopPhoto} alt="" />
            </div>
            <div className={styles.description}>
              <h3 className={styles.title}>
                Restaurant Website Design
              </h3>
              <p className={styles.text}>
                I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.
              </p>
            </div>
          </div>
          <div className={styles.project}>
            <div className={styles.image}>
              <img src={phonePhoto} alt="" />
            </div>
            <div className={styles.description}>
              <h3 className={styles.title}>
                Restaurant Website Design
              </h3>
              <p className={styles.text}>
                I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.
              </p>
            </div>
          </div>
          <div className={styles.project}>
          <div className={styles.image}>
            <img src={coinViewPhoto} alt="" />
          </div>
          <div className={styles.description}>
            <h3 className={styles.title}>
              Restaurant Website Design
            </h3>
            <p className={styles.text}>
              I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.
            </p>
          </div>
        </div>
          <div className={styles.project}>
            <div className={styles.image}>
              <img src={designPhoto} alt="" />
            </div>
            <div className={styles.description}>
              <h3 className={styles.title}>
                Restaurant Website Design
              </h3>
              <p className={styles.text}>
                I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.
              </p>
            </div>
          </div>
          <div className={styles.tail}>
            <button className={styles.button}>VIEW ALL PROJECTS</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
