import React from "react"
import styles from "./social.module.css"

export const SocialIcons = () => {
  return (
    
    <div className={styles.wrapper}>
        <a href="https://twitter.com/minorityprogram" className={styles.a}>
            <img className={styles.social_icon} src="https://mpa-img.s3.amazonaws.com/twitter.png" alt="" />
        </a>
        
        <a href="https://www.facebook.com/MinorityProgrammers" className={styles.a}>
            <img className={styles.social_icon} src="https://mpa-img.s3.amazonaws.com/facebook.png" alt="" />
        </a>
        <a href="https://www.linkedin.com/company/minority-programmers/" className={styles.a}>
            <img className={styles.social_icon} src="https://mpa-img.s3.amazonaws.com/linkedin.png" alt="" />
        </a>
        <a href="https://www.instagram.com/minorityprogrammers/" className={styles.a}>
            <img className={styles.social_icon} src="https://mpa-img.s3.amazonaws.com/instagram.png" alt="" />
        </a>
    </div>
  )
}
