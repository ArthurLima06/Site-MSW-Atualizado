import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Machines from './components/Machines';
import Environment from './components/Environment';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Machines />
      <Environment />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
