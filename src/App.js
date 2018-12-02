import React, { Component } from 'react'
import Wheel from "./components/Wheel"
import indexWheel from './home_wheel.svg'
import aboutWheel from './about_wheel.svg'
import projectsWheel from './projects_wheel.svg'
import NavBar from "./components/NavBar"
import medium from "./medium.svg"
import linkedin from "./linked-in.svg"
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.indexRef = React.createRef()
    this.projectsRef = React.createRef()
    this.aboutRef = React.createRef()
  }

  scroll(ref) {
    window.scrollTo({
      top:this[ref].current.offsetTop, 
      behavior: "smooth"
  })  }
  
  render() {    
    const links = [
      { text: "Projects", anchor: ()=> this.scroll("projectsRef") },
      { text: "About me", anchor: ()=> this.scroll("aboutRef") }
    ]

    return (
      <>
        <div className='border' ref={this.indexRef}>
          <div className='main'>
            <NavBar links={links} className="nav" />
            <div className='content'>
              <div className={`text ${this.props["text-align"]}`}>
                <h1 className='blog-name'>Kortraits</h1>
                <hr className='hr' />
                <p className='author-name'>Karla Vidal Chi</p>
              </div>
              <Wheel className="wheel" src={indexWheel} alt="logo" />
            </div>
            <div className='media' />
          </div>
        </div>

        <div className='border' ref={this.projectsRef}>
          <div className='main lines'>
            <NavBar links={links} className="nav" />
            <div className='content'>
              <div className={`text left`}>
                <h2 className="app-name">Popakorn</h2>
                <p className="app-text">Es una aplicación de escritorio donde recibes contenido personalizado de todas las plataformas de contenido multimedia a la que estés suscrito (Netflix, HBO, etc) además de poder recibir recomendaciones aleatorias para no tener que pensar en qué ver.</p>
                <a className="app-link" href="https://medium.com/@karlavidalchi/popakorn-6c77d43d0d">Saber más</a>
              </div>
              <Wheel className="wheel" src={projectsWheel} alt="logo" />
            </div>
            <div className='media' />
          </div>
        </div>

        <div className='border' ref={this.aboutRef}>
          <div className='main lines'>
            <NavBar links={links} className="nav" />
            <div className='content'>
              <div className={`text left`}>
                <h2 className="app-name">Karla Vidal Chi</h2>
                <p className="app-text">Hello, I&apos;m Karla, a photographer focused on UX/UI Design (Sketch, Flinto, Invision, CSS, HTML, Lean UX, Design Thinking).</p>
                <p className="app-text">I studied photography in a private school called TAI in Madrid, for 2 years. My specialty in photography is fashion photography. </p>
                <a className="app-mail" href="mailto:kortraits@gmail.com">kortraits@gmail.com</a>
              </div>
              <Wheel className="wheel" src={aboutWheel} alt="logo" />
            </div>
            <div className='media'>
              <img className="logo-medium" src={medium} alt="Link to medium" />
              <img className="logo-linkedin" src={linkedin} alt="Link to linkedin" />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App
