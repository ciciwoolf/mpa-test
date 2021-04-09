import React from "react"
import styles from "./page.module.css"


export const EventsPage = () => { 
  return (
    
    <div className={styles.page_body}>
           <div className={styles.banner}>
               <div className={styles.banner_header}>
               <img className={styles.map} src="https://mpa-img.s3.amazonaws.com/map.png" alt=""/>
               <img className={styles.bulb} src="https://mpa-img.s3.amazonaws.com/bulb.png" alt=""/>
               <img className={styles.hand} src="https://mpa-img.s3.amazonaws.com/hand.png" alt=""/>
               <img className={styles.people} src="https://mpa-img.s3.amazonaws.com/people.png" alt=""/>
                 <h1 className={styles.banner_text}>Invest directly &nbsp; <br></br> into minority innovations.</h1>            
               </div>
             </div>  

           <div className={styles.card_body}>
             <h2 className={styles.card_headers}>Details Coming Soon!</h2>   
           </div>
    </div>
   
 )
}