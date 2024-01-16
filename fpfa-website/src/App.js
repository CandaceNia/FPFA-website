import './App.css';
import { BrowserRouter as Link, Route, Router, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Nav from './Nav';
import Events from './Events';

function App() {
  return (
    <div id='app'>
 
      <Nav/>
      <Routes id='routes'>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/events" element={<Events/>}/>
      </Routes> 
  
  </div>
  );
}

export default App;
