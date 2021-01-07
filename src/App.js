import './App.css';
import '../node_modules/aos/dist/aos.css';
import React from 'react';
import Home from './components/Views/Home';
import About from './components/Views/About';
import ContactUs from './components/Views/ContactUs';
import Footer from './components/Views/Footer';
import AOS from 'aos';
import Navbar from './components/Views/Header';
import Services from './components/Views/Services';

function App() {
  const [isSticky, setSticky] = React.useState(false);
  const stickyRef = React.useRef(null);

  React.useEffect(() => {
    AOS.init();
  }, []);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  const handleScroll = () => {
    stickyRef.current.getBoundingClientRect().y < 0
      ? setSticky(true)
      : setSticky(false);
  };

  return (
    <React.Fragment>
      <Navbar sticky={isSticky} />
      <main ref={stickyRef}>
        <Home />
        <Services />
        <About />
        <ContactUs />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
