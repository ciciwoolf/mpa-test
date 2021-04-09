
import React from "react"
import { Link } from "react-router-dom"
import styles from "./menu-items.module.css"

export const MenuItems = () => {
  
  return (
   
    <ul className={styles.wrapper}>
    <li>
      <Link to="/service">Service</Link>
    </li>
    <li>
      <Link to="/events">Events</Link>
    </li>
    <li>
      <Link to="/learn">Learn</Link>
    </li>
    <li>
      <Link to="/join">Join</Link>
    </li>
  </ul>
  )
}
