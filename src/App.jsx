import './App.css'
import { useRef } from 'react'
import {Header} from './components/Header'
import { ProfileCard } from './components/ProfileCard'
import { About } from './components/About'
import { Skills} from './components/Skills'
import { Projects} from './components/Projects'
import { Contact} from './components/Contact'
import { Footer } from './components/Footer'


function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  

  return (
    <>
    <Header scrollToContact={scrollToContact}/>
    <ProfileCard/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact ref={contactRef}/>
    <Footer/>
    </>
  )
}

export default App
