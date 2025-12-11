import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Equipment from "@/components/Equipment";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Equipment />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
