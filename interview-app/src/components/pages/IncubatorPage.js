import React from "react"
import styles from "./incubator.module.css"
import { FeaturedCard } from "../cards/FeaturedCard"
import { UpcomingCard } from "../cards/UpcomingCard"
import {FeaturedData, UpcomingData} from "../../data/data"


export const IncubatorPage = () => {

  return (
    
     <div className={styles.page_body}>
            <div className={styles.banner}>
                <div className={styles.banner_header}>
                <img className={styles.map} src="https://mpa-img.s3.amazonaws.com/map.png" alt=""/>
                <img className={styles.bulb} src="https://mpa-img.s3.amazonaws.com/bulb.png" alt=""/>
                <img className={styles.hand} src="https://mpa-img.s3.amazonaws.com/hand.png" alt=""/>
                <img className={styles.people} src="https://mpa-img.s3.amazonaws.com/people.png" alt=""/>
                  <h1 className={styles.banner_text}>Invest directly &nbsp; <br></br> into minority innovations</h1>            
                </div>
              </div>  

            <div className={styles.card_body}>             
              <div className={styles.card_featured}>    
              <div className={styles.card_headers}>Featured Startups</div>  

              {FeaturedData.map((item)=> {
                    console.log(item)
                    return (
                      <FeaturedCard
                        id={item.id}
                        key={item.id}
                        projectnName={item.name}
                        projectDescription={item.description}
                        currentFunding={item.currentFunding}
                        fundingGoal={item.fundingGoal}
                        image={item.image}          
                        learnLink={item.learnLink}
                        giveLink={item.giveLink}            
                      />
                    )
                })}
              </div>   

              <div className={styles.card_upcoming}>
                <div className={styles.card_headers}>Upcoming Startups</div>  
                {UpcomingData.map((item)=> {
                    console.log(item)
                    return (
                      <UpcomingCard
                      id={item.id}
                      key={item.id}
                      projectnName={item.name}
                      projectDescription={item.description}
                      currentFunding={item.currentFunding}
                      fundingGoal={item.fundingGoal}
                      image={item.image}          
                      learnLink={item.learnLink}                    
                      />
                    )
                })}               
            </div>     
          </div>
     </div>
  )
}