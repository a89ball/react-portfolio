import React from 'react';
import NavBar from './src/components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Clients from './src/components/Clients'
import Skills from './src/components/Skills'
import Projects from './src/components/Project';
import Contact from './src/components/Contact';
//import Footer from './components/Footer';
import About from './src/components/About';

function App() {
    return (
      
  <Router>
  <NavBar />
  <Switch>
    <Route path='/' exact component={About}/>
    <Route path='/clients' exact component={Clients}/>
    <Route path='/projects' exact component={Projects}/>
    <Route path='/skills' exact component={Skills}/>
    <Route path='/contact' exact component={Contact}/>
  </Switch>
  </Router>
    );
  }
  
  export default App;