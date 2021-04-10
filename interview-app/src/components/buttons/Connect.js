import React from "react"
import styles from  "./connect-button.module.css"


export const Connect = () => {
    
        return (
            <>
                <button className={styles.btn}><span>Connect Wallet</span></button>
            </>
     )
    }

    export const Learn = () => {
        return (
            <>
            <button className={styles.btn_learn}>Learn</button>
        </>
        )
    }

    export const Give = () => {
        return (
            <>
            <button className={styles.btn_give}>Give</button>
        </>
        )
    }

    export const LearnTwo = () => {
        return (
            <>
            <button className={styles.btn_learnTwo}>Learn</button>
        </>
        )
    }