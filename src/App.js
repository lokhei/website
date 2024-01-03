import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function Home(){
  return(
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
    </div>
  );
}

function Projs(){
  return(
    <div className="Projs">
      <NavBar />
      <About />
    </div>
  );
}
function App() {
  return (
    <Router basename="/website">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<Projs/>} />
      </Routes>
      </Router>
  );
}


export default App;
