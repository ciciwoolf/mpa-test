import React from "react"
import styles from "./mycourse.module.css"   


export const CategoryCard = (props) => {
    console.log(props)
      
    return (
             
        <div className={styles.cardBody}>
          <div className={styles.article}>                      
            <div>
                <h2 className={styles.title}>{props.title}</h2>                
             
            <figure>
                <img className={styles.image} alt = "" src={props.image}/>          
              </figure>                                         
                                       
            </div>
          </div>  
        </div>  
      )
    }
  
      