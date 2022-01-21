import './App.css';
import NavBar from './PorfolioContainer/Header/NavBar';
import Profile from './PorfolioContainer/Home/Profile';
import About from './PorfolioContainer/AboutMe/About';
import Projects from './PorfolioContainer/ProjectDir/Projects';
import Skill from './PorfolioContainer/Skillbar/skill'
import{BrowserRouter as Router, Switch ,Route} from 'react-router-dom';
import FooterJS from './PorfolioContainer/Footer/FooterJS';


function App() {
  return (
    <div className="App">
        <NavBar />
        <Profile />
        <About />
        <Projects />
          <Skill />
        
        <FooterJS />
    </div>
  );
}

export default App;
