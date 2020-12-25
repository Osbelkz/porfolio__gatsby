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
            <img src={productImg} alt="product image" />
            <h3 className={styles.title}>Product Design</h3>
            <p className={styles.text}>
              Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.
            </p>
          </div>
          <div className={styles.skill}>
            <img src={visualImg} alt="visual image" />
            <h3 className={styles.title}>Visual Design</h3>
            <p className={styles.text}>
              My experience at dribbble has helped me learn to develop the eye for design. Colors, typography, layout and the whole package.            </p>
          </div>
          <div className={styles.skill}>
            <img src={motionImg} alt="motion image" />
            <h3 className={styles.title}>Motion Design</h3>
            <p className={styles.text}>
              I started my design journey with motion design in my college days. Motion is something that really fascinates me because of the flexibility of story telling.             </p>
          </div>
          <div className={styles.skill}>
            <img src={photographyImg} alt="photography image" />
            <h3 className={styles.title}>Photography</h3>
            <p className={styles.text}>
              Clicking pictures really brings out the creative in me. Phtography really makes you look and percieve things in a different way.            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skillset
