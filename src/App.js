import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { About } from "./components/About";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function Home(){
  return(
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Footer />
    </div>
  );
}

function Projs(){
  return(
    <div className="Projs">
      {/* <NavBar /> */}
      <About />
      {/* <Footer /> */}
    </div>
  );
}
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<Projs/>} />
      </Routes>
      </Router>
  );
}


export default App;
