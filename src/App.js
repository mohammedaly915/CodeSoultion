import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Work from "./Pages/Work/Work";
import Services from './Pages/Services/Services';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Foorter/Footer';
import ChatBot from './Components/Chatbot/Chatbot';
import GradioChatBot from './Components/Chatbot/GradioChatBot';

function App() {
  return (  
    <>
  <div className="min-h-screen  bg-primeColor flex flex-col">
        <Navbar />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot /> 
        {/* <GradioChatBot/> */}

      </div>
    </>
      
  );
}

export default App;