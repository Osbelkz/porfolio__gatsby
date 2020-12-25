import React from "react"
import styles from "./skillset.module.scss"
import productImg from "../images/skillset/product.svg"
import visualImg from "../images/skillset/visual.svg"
import motionImg from "../images/skillset/motion.svg"
import photographyImg from "../images/skillset/photography.svg"

const Skillset = () => {
  return (
    <section className={styles.skillset}>
      <div className={styles.skillset__wrapper}>
        <div className={styles.description}>
          <h2 className={styles.title}>Skillset</h2>
          <p className={styles.text}>
            With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.
          </p>
        </div>
        <div className={styles.skills}>
          <div className={styles.skill}>
            <img src={productImg} alt="" />
            <h3 className={styles.title}>Product Design</h3>
            <p className={styles.text}>
              Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.
            </p>
          </div>
          <div className={styles.skill}>
            <img src="" alt="" />
            <h3 className={styles.title}>Product Design</h3>
            <p className={styles.text}>
              Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.
            </p>
          </div>
          <div className={styles.skill}>
            <img src="" alt="" />
            <h3 className={styles.title}>Product Design</h3>
            <p className={styles.text}>
              Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.
            </p>
          </div>
          <div className={styles.skill}>
            <img src="" alt="" />
            <h3 className={styles.title}>Product Design</h3>
            <p className={styles.text}>
              Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skillset
