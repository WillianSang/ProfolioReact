import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Activities from "./Pages/Activities";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import More from "./Pages/More";
import Services from "./Pages/Services";
import './App.css'
import Projects from "./Pages/Projects/Projects";

export default function App() {

  return (
    <div className="container__app">
      <Navbar/>
      <Routes>
        <Route path="/activites" element={<Activities/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/more" element={<More/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
      <footer className="container__footer">
        <p>todos los derechos de @copyright reservador por el autor </p>
      </footer>
    </div>
  )
}