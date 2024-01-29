import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarCompo from './components/NavBarCompo/NavBarCompo';
import "./App.css"
import BannerCompo from './components/BannerCompo/BannerCompo';
import SkillsCompo from './components/SkillsCompo/SkillsCompo';
const App = () => {
  return (
    <div>
    <NavBarCompo/>
    <BannerCompo/>
    <SkillsCompo/>
    </div>
  )
}

export default App
