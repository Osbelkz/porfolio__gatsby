import React from "react"
import styles from "./projects.module.scss"
import laptopPhoto from "../images/projects/laptop.png"
import phonePhoto from "../images/projects/phone.png"
import coinViewPhoto from "../images/projects/coinview.png"
import designPhoto from "../images/projects/design.png"

const Project = ({photo, title, text}) => {
  return <div className={styles.project}>
    <img className={styles.image} src={photo} alt="" />
    <div className={styles.description}>
      <h3 className={styles.title}>
        {title}
      </h3>
      <p className={styles.text}>
        {text}
      </p>
    </div>
  </div>
}
const Projects = () => {

  const projects = [
    {photo: laptopPhoto, title: "Restaurant Website Design", text: "I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one."},
    {photo: phonePhoto, title: "Restaurant Website Design", text: "I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one."},
    {photo: coinViewPhoto, title: "Restaurant Website Design", text: "I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one."},
    {photo: designPhoto, title: "Restaurant Website Design", text: "I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one."},
  ]

  return (
    <section className={styles.projects} id={"projects"}>
      <div className={styles.projects__wrapper}>
        <div className={styles.projects__inner}>
          <div className={styles.head}>
            <h5 className={styles.subtitle}>
              MY PROJECTS
            </h5>
            <h2 className={styles.title}>
              <span>Work that I’ve done </span>
              <span>for the past 8 years</span>
            </h2>
          </div>
          {projects.map((project, i) => {
            return <Project key={i} photo={project.photo} title={project.title} text={project.text} />
          })}
          <div className={styles.tail}>
            <button className={styles.button}>VIEW ALL PROJECTS</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
