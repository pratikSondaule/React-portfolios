import './App.css'
import Banner from './components/Banner'
import NavigationBar from './components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <NavigationBar />
      <Banner />
      <Skills />
      <Projects />
    </>
  )
}

export default App
