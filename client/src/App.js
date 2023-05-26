
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";

import { Footer } from "./components/Footer";
import Home from './components/Home';
import { Register } from './components/Register';
import { Contact } from './components/Contact';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';


import Html from './components/quizpages/Html';
import Javascript from './components/quizpages/Javascript';
import Python from './components/quizpages/Python';
import CHas from './components/quizpages/CHas';

import Java from './components/quizpages/Java';
import Css from './components/quizpages/Css';
import Javaskill from './components/skillpages/Javaskill';
import Htmlskills from './components/skillpages/Htmlskills';
import Jsskills from './components/skillpages/Jsskills';
import Pythonskill from './components/skillpages/Pythonskill'
import CHasskills from './components/skillpages/CHasskills';
import Cssskills from './components/skillpages/Cssskills';

function App() {
  return (
    <div className="App">

      <NavBar />
      <BrowserRouter>

        <Routes>


          <Route path='/' element={<Register></Register>} />
          <Route path='/NavBar' element={<NavBar />} />

          <Route path='/Home' element={<Home />} />

          <Route path='/Register' element={<Register />} />

          <Route path='/Html' element={<Html />} />
          <Route path='/Css' element={<Css />} />
          <Route path='/Java' element={<Java />} />


          <Route path='/CHas' element={<CHas />} />
          <Route path='/Python' element={<Python />} />
          <Route path='/JavaScript' element={<Javascript />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Javaskill' element={<Javaskill />} />
          <Route path='/Htmlskills' element={<Htmlskills />} />
          <Route path='/Jsskills' element={<Jsskills />} />
          <Route path='/Pythonskill' element={<Pythonskill />} />
          <Route path='/CHasskills'
            element={<CHasskills />} />
          <Route path='/Cssskills' element={<Cssskills />} />








        </Routes></BrowserRouter>






    </div>
  );
}

export default App;
