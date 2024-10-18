import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ChatUsButton from './components/ChatUsButton';
import { Analytics } from "@vercel/analytics/react"
import Pricing from './components/Pricing.jsx';


function App() {
  return (
    <div className="font-sans">
      <Header />
      <Analytics/>
      <Pricing />
      <HeroSection />
     
      <Products />
      <Testimonials />
      <Footer />
      <ChatUsButton />
    </div>
  );
}

export default App;

