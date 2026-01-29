
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Appointment from './pages/Appointment';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 selection:bg-sky-500 selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Appointment />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Sticky WhatsApp Floating Button - Style matches the image bubble */}
        <a
          href="https://wa.me/212781214641"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-5 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-90 transition-all duration-300 group"
          title="Chat on WhatsApp"
        >
          <svg 
            viewBox="0 0 24 24" 
            width="34" 
            height="34" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path>
          </svg>
          <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl font-bold text-sm shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">تحدث معنا</span>
        </a>
      </div>
    </Router>
  );
};

export default App;
