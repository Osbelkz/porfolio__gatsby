import React from "react"
import styles from "./contacts.module.scss"

const Contacts = () => {

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className={styles.contacts} id={"contacts"}>
      <div className={styles.contacts__wrapper}>
        <div className={styles.description}>
          <h2 className={styles.title}>Let’s get started</h2>
          <p className={styles.text}>
            Now that you know a lot about me, let me know if you are interested to work with me.
          </p>
        </div>
        <form className={styles.contact_form} action="">
          <label htmlFor="fname">Name</label>
          <input type="text" id="fname" name="fname" />
          <label htmlFor="femail">Email</label>
          <input type="email" id="femail" name="femail" />
          <label htmlFor="fmessage">Message</label>
          <textarea id="fmessage" name="fmessage"/>
          <button onClick={onSubmit}>Let’s get started</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts
