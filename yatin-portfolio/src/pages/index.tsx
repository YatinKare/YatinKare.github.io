import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Navigation from "../components/navigation"
import Experience from "../components/experience";

import networkLogo from "../images/mta-networking-fundamentals-certified-2022.png"
import softwareLogo from "../images/mta-software-development-fundamentals-certified-2022.png"
import excelLogo from "../images/microsoft-office-specialist-excel-associate-office-2019.png"
import profile from "../images/profile.jpeg";

import * as styles from "./index.module.css";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className={styles.main}>
      <Navigation />
      <div className={styles.body}>
        <div className={styles.intro}>
          <div className={styles.introText}>
            <h1>Welcome to my portfolio</h1>
            <p className={styles.introTextDescription}>I'm a 18 year old high school senior who loves technology, music, and photography</p>
          </div>
          <img src={profile} className={styles.profileImage}></img>
        </div>
        <div className="certs">
          <h1>Here's what I'm certified for</h1>
          <div className={styles.imagerow}>
            <img src={networkLogo} className={styles.certificationImage} />
            <img src={softwareLogo} className={styles.certificationImage} />
            <img src={excelLogo} className={styles.certificationImage} />
          </div>
        </div>
        <div>
          <h1>Here are some of my experiences: </h1>
          <Experience />
        </div>
      </div>
    </div>
  )
}

export default IndexPage
export const Head: HeadFC = () => <title>Home Page</title>
