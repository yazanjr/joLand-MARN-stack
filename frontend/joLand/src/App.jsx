import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'
import Project2 from './components/Project2'
import Numbers from './components/Numbers'
import Numbers2 from './components/Numbers2'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header/>
      <Numbers2/>
      <About/>
      <Project2/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
