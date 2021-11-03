import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Clients from './components/Clients'
import Skills from './components/Skills'
import Projects from './components/Project';
import Contact from './components/Contact';
//import Footer from './components/Footer';
import About from './components/About';

function App() {
    return (
      
  <Router>
  <NavBar />
  <Routes>
    <Route path='/' exact component={About}/>
    <Route path='/clients' exact component={Clients}/>
    <Route path='/projects' exact component={Projects}/>
    <Route path='/skills' exact component={Skills}/>
    <Route path='/contact' exact component={Contact}/>
  </Routes>
  </Router>
    );
  }
  
  export default App;