import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Navigation from "../components/navigation"


const IndexPage: React.FC<PageProps> = () => {
  return (
   <div className="main">
    <Navigation />
    <div className="intro">
      <h1>Welcome to my portfolio</h1>
      <p>Im a 18 year old highschool senior who loves technology, music, and photography</p>
       {/* <img src={profile}></img> */}
       <section className="certs">
        <h1>Here's what I'm certified for</h1>
        <div className="imagerow">
          
        </div>
       </section>
    </div>
   </div> 
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
