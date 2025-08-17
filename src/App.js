import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Product from './components/Product';
import Review from './components/Review';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';
import StickyBottomBar from './components/StickyBottomBar';
import Checkout from './page/Checkout';
import ThankYou from './page/ThankYou';


// Main page component
const MainPage = () => {
  return (
    <>
      <Header />
      <About />
      <Product />
      <Review />
      <Contact />
      <Footer />
      {/* <StickyBottomBar /> */}
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans bg-black text-white over overflow-x-hidden">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;