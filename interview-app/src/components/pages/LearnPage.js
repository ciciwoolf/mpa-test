import React from "react"
import styles from "./learn.module.css"
import { MyCourseCard } from "../cards/MyCourseCard"
import { FeaturedCourseCard } from "../cards/FeaturedCourseCard"
import { CategoryCard} from "../cards/CategoryCard"
import {MyCoursesData, FeaturedCoursesData, CategoryData} from "../../data/data"


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
            <h1 className={styles.card_headerOne}>My Courses </h1>              
              <div className={styles.card_featured}> 

              {MyCoursesData.map((item)=> {
                    console.log(item)
                    return (
                      <MyCourseCard
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        tag={item.tag}
                        currentModule={item.currentModule}
                        totalModule={item.totalModule}
                        learnLink={item.learnLink} 
                                   
                      />
                    )
                })}
              </div>   

              <h1 className={styles.card_headerTwo}>Featured Courses</h1>  
              <div className={styles.card_upcoming}>                
                {FeaturedCoursesData.map((item)=> {
                    console.log(item)
                    return (
                      <FeaturedCourseCard
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        tag={item.tag}
                        currentModule={item.currentModule}
                        totalModule={item.totalModule}
                        learnLink={item.learnLink}                  
                      />
                    )
                })}               
            </div>     
            <h1 className={styles.card_headerTwo}>By Category</h1>  
              <div className={styles.card_upcoming}>                
                {CategoryData.map((item)=> {
                    console.log(item)
                    return (
                      <CategoryCard
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        image={item.image}                 
                      />
                    )
                })}               
            </div>     
        
        </div>
      
     
     </div>
    
  )
}