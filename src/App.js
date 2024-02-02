import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarCompo from './components/NavBarCompo/NavBarCompo';
import "./App.css"
import BannerCompo from './components/BannerCompo/BannerCompo';
import SkillsCompo from './components/SkillsCompo/SkillsCompo';
import ProjectCompo from './components/ProjectsCompo/ProjectCompo';
import Contact from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
const App = () => {
  return (
    <div>
    <NavBarCompo/>
    <BannerCompo/>
    <SkillsCompo/>
    <ProjectCompo/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
