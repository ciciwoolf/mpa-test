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
            <h1 className={styles.card_headerOne}>Featured Startups </h1>              
              <div className={styles.card_featured}> 

              {FeaturedData.map((item)=> {
                    console.log(item)
                    return (
                      <FeaturedCard
                        id={item.id}
                        key={item.id}
                        name={item.name}
                        description={item.description}
                        currentFunding={item.currentFunding}
                        fundingGoal={item.fundingGoal}
                        image={item.image}          
                        learnLink={item.learnLink}
                        giveLink={item.giveLink}            
                      />
                    )
                })}
              </div>   

              <h1 className={styles.card_headerTwo}>Upcoming Startups</h1>  
              <div className={styles.card_upcoming}>                
                {UpcomingData.map((item)=> {
                    console.log(item)
                    return (
                      <UpcomingCard
                      id={item.id}
                      key={item.id}
                      name={item.name}
                      description={item.description}
                      currentFunding={item.currentFunding}
                      fundingGoal={item.fundingGoal}
                      image={item.image}          
                      learnLink={item.learnLink}                    
                      />
                    )
                })}               
            </div>     
        
            <div className={styles.threeButtons}>
                <button className={styles.btn}>Advise a Startup</button>
                <button className={styles.btn}>Join Minority Venures Cohort</button>
                <button className={styles.btn}>Help &lt;Cod/e&gt; </button>                
            </div>
        
        </div>
      
     
     </div>

     
  )
}