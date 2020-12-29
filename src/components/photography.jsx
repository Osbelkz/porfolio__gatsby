import React, { useState } from "react"
import styles from "./photography.module.scss"
import italyImage1 from "../images/photography/italy/damiano-baschiera-hFXZ5cNfkOk-unsplash.png"
import italyImage2 from "../images/photography/italy/domenico-loia-_zl4e_0S50w-unsplash.png"
import italyImage3 from "../images/photography/italy/jack-ward-rknrvCrfS1k-unsplash.png"
import italyImage4 from "../images/photography/italy/karl-kohler-dV1S_uKSb6A-unsplash.png"
import australiaImage1 from "../images/photography/australia/annie-spratt-pbrQvuKJQf8-unsplash.png"
import australiaImage2 from "../images/photography/australia/lachlan-dempsey-O14abKtZ5iY-unsplash.png"
import australiaImage3 from "../images/photography/australia/laura-cros-KtJy7cZV5OQ-unsplash.png"
import australiaImage4 from "../images/photography/australia/manuel-meurisse-5c8fczgvar0-unsplash.png"
import indiaImage1 from "../images/photography/india/ibrahim-rifath-oLVV_o45GIA-unsplash.png"
import indiaImage2 from "../images/photography/india/kirti-kalla-JRhvllDBhzs-unsplash.png"
import indiaImage3 from "../images/photography/india/raghu-nayyar-EpAq2EE-shg-unsplash.png"
import indiaImage4 from "../images/photography/india/tiago-rosado-mwV6PsB-7Bk-unsplash.png"
import brazilImage1 from "../images/photography/brazil/d-a-v-i-d-s-o-n-l-u-n-a-mhTUlFub1vU-unsplash.png"
import brazilImage2 from "../images/photography/brazil/diego-rosa-zPtNrEv3xN4-unsplash.png"
import brazilImage3 from "../images/photography/brazil/glauber-sampaio-le2Ohc3TRS0-unsplash.png"
import brazilImage4 from "../images/photography/brazil/vinicius-amnx-amano-7uIdUtSbb7w-unsplash.png"

const Photography = () => {

  const [category, setCategory] = useState("italy")

  const images = {
    italy: [italyImage1, italyImage2, italyImage3, italyImage4],
    australia: [australiaImage1, australiaImage2, australiaImage3, australiaImage4],
    india: [indiaImage1, indiaImage2, indiaImage3, indiaImage4],
    brazil: [brazilImage1, brazilImage2, brazilImage3, brazilImage4],
  }

  const onButtonClick = (e) => {
    setCategory(e.currentTarget.dataset.category)
  }

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
          {
            Object.entries(images).map(([country, arrImg]) => {

              const style = category === country
                ? `${styles.button} ${styles.active}`
                : styles.button

              return (
                <button key={country}
                        className={style}
                        data-category={country}
                        onClick={onButtonClick}>
                {country.toUpperCase()}
              </button>
              )
            })
          }
        </div>

        <div className={styles.images}>
          {
            images[category].map((img, i) => {
              return <img key={i} src={img} alt="" />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Photography
