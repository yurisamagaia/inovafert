import Navbar from './pages/Navbar/Navbar';
import Banner from './pages/Banner/Banner';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Footer from './pages/Footer/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
