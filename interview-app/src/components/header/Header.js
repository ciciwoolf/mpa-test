import React from "react"
import {SocialIcons} from "../social-icons"
import {MenuItems} from "../menu-items"
import {Connect} from "../buttons"
import styles from "./header.module.css"


export const Header = () => {

  return (    
    <header className={styles.header}>
        <div className={styles.header_wrapper}>       
      
            <div className={styles.socials}>   
              <SocialIcons/>
            </div> 
            <div className={styles.btn_wrapper}> 
              <Connect/>
            </div>  
            <div> 
              <MenuItems/>
            </div> 
            <div>
            <img className={styles.search_icon} src="https://mpa-img.s3.amazonaws.com/searchglass.png" alt="" />
            <img className={styles.glass_icon} src="https://mpa-img.s3.amazonaws.com/glass.png" alt=""/>
            </div>  
            <div>
              <img className={styles.logo_icon} src="https://mpa-img.s3.amazonaws.com/logo+(2).png" alt=""/>
            </div>              
        </div>  
    </header>   
    
  )
}

