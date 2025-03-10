import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Work from "./Pages/Work/Work";
import Services from './Pages/Services/Services';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Foorter/Footer';
import ChatBot from './Components/Chatbot/Chatbot';
import GradioChatBot from './Components/Chatbot/GradioChatBot';
import { useEffect } from 'react';
function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Optional: adds smooth scrolling
    });
  }, [pathname]);
  return (  
    <>
  <div className="min-h-screen  bg-primeColor flex flex-col items-center ">
        <Navbar />
        <main className="w-full overflow-hidden ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        {/* <ChatBot />  */}
        <GradioChatBot/> 

      </div>
    </>
      
  );
}

export default App;