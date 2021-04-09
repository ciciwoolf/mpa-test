import React from "react"
import styles from "./learn.module.css"
//import { Card } from "CardBody"


export const LearnPage = () => {

  return (
    
     <div className={styles.page_body}>
            <div className={styles.banner}>
                <div className={styles.banner_header}>
                <img className={styles.map} src="https://mpa-img.s3.amazonaws.com/map.png" alt=""/>
                <img className={styles.butterfly} src="https://mpa-img.s3.amazonaws.com/butterfly.png" alt=""/>
                <img className={styles.people} src="https://mpa-img.s3.amazonaws.com/people.png" alt=""/>
                  <h1 className={styles.banner_text}>Learn high in &nbsp; <br></br> Demand IT skills & get cyrpto</h1>     
                  <h1 className={styles.banner_textTwo}>powered by KoinStreet</h1>         
                </div>
              </div>  

            <div className={styles.card_body}>
              <div className={styles.card_partOne}>
                <h2 className={styles.card_headers}>Featured Startups</h2>    
            
            
              </div>   
              <div className={styles.card_partTwo}>
                <h2 className={styles.card_headers}>Upcoming Startups</h2>   

            </div>     
          </div>
     </div>
    
  )
}