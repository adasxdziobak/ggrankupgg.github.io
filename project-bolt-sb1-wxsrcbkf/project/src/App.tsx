import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import Calculator from './components/Calculator';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Terms from './components/Terms';
import PaymentMethods from './components/PaymentMethods';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OrderPage from './pages/OrderPage';
import PricingPage from './pages/PricingPage';
import AuthPage from './pages/AuthPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-[#0e0e0e] text-white font-roboto">
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <Hero />
                <WhyUs />
                <Services />
                <Calculator />
                <HowItWorks />
                <Reviews />
                <FAQ />
                <Terms />
                <PaymentMethods />
                <Contact />
                <Footer />
              </>
            } />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;