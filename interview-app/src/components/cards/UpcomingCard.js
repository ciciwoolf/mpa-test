import React from "react"
import styles from "./upcoming.module.css"   
import { Link } from "react-router-dom"

//Props are ID - Image

export const UpcomingCard = (props) => {
    console.log(props)
      

    return (
             
      <div className={styles.cardBody}>
        <div className={styles.article}>
          <div className={styles.border}>
            <figure>
              <img className={styles.image} alt = "StartUp" src={props.image}/>          
            </figure>
          <div>
              <h2 className={styles.name}>{props.name}</h2>   

          <div className={styles.description}>{props.description}</div>   
              <div>

              <Link to={props.learnLink}>
                          <button className={styles.btn_learn}>
                              Learn
                          </button>
                    </Link>                                   
                      
                                           
              </div>           
          <div className={styles.funding}>${props.currentFunding}/{props.fundingGoal}</div>   
          <figure>
              <img className={styles.image} alt = "" src="https://mpa-img.s3.amazonaws.com/outOfBar.png"/>          
            </figure>     
            <h5>83% Funded</h5>   
                            
              
       
                   
              </div>
           </div>
          </div>  
        </div>  
    )
  }