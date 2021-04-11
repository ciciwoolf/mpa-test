import React from "react"
import styles from "./mycourse.module.css"   
import { Link } from "react-router-dom"



export const FeaturedCourseCard = (props) => {
    console.log(props)
      
    return (
             
        <div className={styles.cardBody}>
          <div className={styles.article}>
            <div className={styles.border}>
            <figure>
                <img className={styles.image} alt = "" src="https://mpa-img.s3.amazonaws.com/Earn+Button.png"/>          
              </figure>    
            <div>
                <h2 className={styles.title}>{props.title}</h2>  
                <div className={styles.tag}>{props.tag}</div>   
                <div>

                <Link to={props.learnLink}>
                      <button className={styles.btn_learn}>
                          Learn
                      </button>
                </Link>         

                                                                
                </div>           
            <div className={styles.funding}>{props.currentModule}/{props.totalModule}</div>   
            <figure>
                <img className={styles.image} alt = "" src="https://mpa-img.s3.amazonaws.com/outOfBar.png"/>          
              </figure>     
              <h5>83% Completed</h5>   
                              
                
         
                     
                </div>
             </div>
            </div>  
          </div>  
      )
    }
  
      