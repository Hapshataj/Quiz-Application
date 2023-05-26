import React from 'react'
import { NavBar } from './NavBar'
import { Banner } from './Banner'
import { Skills } from './Skills'
import { Projects } from './Projects'
import { Register } from './Register'
import { Contact } from './Contact'
import { Footer } from './Footer'




export default function Home() {
  return (
    <div>

      <Banner/>
    
      <Projects/>
      <Contact/>
      <Skills/>
     
      <Footer/>
     
    

    </div>
  )
};


