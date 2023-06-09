
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Work from './pages/Work';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import TechStack from './pages/TechStack';
import HomePage from './components/HomePage';
import Login from './pages/Login';
import Registration from './pages/Registration';
import axios from 'axios';
import SampleProjects from './pages/SampleProjects';
import ShilpaPortfolio from './components/ShilpaPortfolio';
import JoshPortfolio from './components/JoshPortfolio';
import Joshwork from './pages/Joshwork';
import RoryPortfolio from './components/RoryPortfolio';
import AddProject from './components/Projects/AddProject';
import EditProject from './components/Projects/EditPoject';
axios.defaults.baseURL = `http://localhost:8080/api`
import Computer from './pages/Computer';
import ProjectAnimation from './pages/ProjectAnimation';
import Index from './pages/background/index';
import Background from './pages/background/background';
import Globe from './pages/Globe';
import Cube from './pages/Cube';
// import Scrolling from './pages/scrolling/Scrolling';





function App() {

  return (
    
      <div className='App'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element = {<HomePage />} />
            <Route path="/about" element = {<About />} />
            <Route path="/work" element = {<Work />} />
            <Route path="/projects" element = {<Projects />} />
            <Route path="/sampleprojects" element = {<SampleProjects />} />
            <Route path="/contact" element = {<Contact />} />
            <Route path="/techStack" element={<TechStack />} />
            <Route path="/login" element = {<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path='/shilpaportfolio' element= {<ShilpaPortfolio />} />
            <Route path='/joshportfolio' element= {<JoshPortfolio />} />
            <Route path='/roryportfolio' element= {<RoryPortfolio />} />
            <Route path="/addproject" element = {<AddProject />} />
            <Route path="/editproject" element = {<EditProject />} />
            <Route path="/computer" element = {<Computer />} />
            <Route path="/projectanimation" element = {<ProjectAnimation />} />
            <Route path="/index" element = {<Index />} />
            <Route path="/background" element = {<Background />} />
            <Route path="/globe" element={<Globe />} />
            <Route path="/cube" element={<Cube />} />
            {/* <Route path="/scrolling" element={<Scrolling />} /> */}





          </Routes>
          
        </Router>
       
      </div>
      
  )
}

export default App
