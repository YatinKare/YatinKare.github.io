import * as React from "react"
import { Link, PageProps } from "gatsby"
import profile from "../images/profile.jpeg";

import * as styles from "./navigation.module.css";

const Navigation: React.FC<PageProps> = () => {
  return (
   <div className={styles.main}>
    <img src={profile} className={styles.image} />
    <div className={styles.links}>
      <Link to='/posts' className={styles.link}>/posts</Link>
       <Link to='/contact' className={styles.link}>/contact</Link>     
    </div>
   </div> 
  )
}

export default Navigation;