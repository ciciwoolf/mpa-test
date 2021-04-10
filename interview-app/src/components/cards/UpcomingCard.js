import React from "react"
import styles from "./featured.module.css"   
import {LearnLink} from "../buttons/LearnLink" 

//Props are ID - Image

export const UpcomingCard = (props) => {
    console.log(props)
      
           return (
             
            <div className={styles.cardBody}>
              <div className={styles.article}>
                <div className={styles.border}>
                  <figure>
                    <img className={styles.image} alt = "Chocolate Product" src={props.image}/>          
                  </figure>
                    <div className={styles.blurbBody}>
                        <h2 className={styles.name}>{props.name}</h2>                 
                      
                        <h2 className={styles.price}>${props.price} &nbsp;&nbsp;  </h2>            
                    <div>
                          <span className={styles.button__wrapper}>
                            <LearnLink 
                            to={`/learn`} 
                            />              
                          </span>
                          </div>  
                         
                      </div>
                 </div>
                </div>  
              </div>  
          );
        }
      