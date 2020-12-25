import React from "react"
import styles from "./testimonials.module.scss"
import laptopImage from "../images/testimonials/laptop.png"
import meetingImage from "../images/testimonials/meeting.png"
import discussionImage from "../images/testimonials/discussion.png"


const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonials__wrapper}>
        <div className={styles.description}>
          <h2 className={styles.title}>This is what people say about me</h2>
          <p className={styles.text}>
            Here are a few lines from people who I have worked with over the past 8+ years in my design career.
          </p>
          <button className={styles.button}>See all testimonials</button>
        </div>
        <div className={styles.testimonials}>
          <div className={styles.testimonial}>
            <img className={styles.image} src={laptopImage} alt="" />
            <div className={styles.inner}>
              <h3 className={styles.text}>
                ‘’Robin is one of the best designers I have worked with in my entire life. He is a designer who is very
                capable of taking up complex projects and delivers impeccable design.’’
              </h3>
              <h4 className={styles.name}>Richard Owens</h4>
              <p className={styles.position}>CEO, Company 1</p>

            </div>
          </div>
          <div className={styles.testimonial}>
            <img className={styles.image} src={meetingImage} alt="" />
            <div className={styles.inner}>
              <h3 className={styles.text}>
                ‘’I think Robin has an incredible gift. It has been an absolute pleasure to work with a designer of this
                caliber.’’ </h3>
              <h4 className={styles.name}>Emily Parker</h4>
              <p className={styles.position}>CEO, Company 2</p>
            </div>
          </div>
          <div className={styles.testimonial}>
            <img className={styles.image} src={discussionImage} alt="" />
            <div className={styles.inner}>
              <h3 className={styles.text}>
                ‘’All I can say that, Robin is a phenomenal designer. The wavelength at which he thinks is astoundaing.
                I love the focus, passion and attention to detial in the design.’’ </h3>
              <h4 className={styles.name}>Vincent Rudd</h4>
              <p className={styles.position}>CEO, Company 1</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
