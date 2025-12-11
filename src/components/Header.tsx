import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-msw.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#equipamentos", label: "Equipamentos" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ];

  const whatsappLink = "https://wa.me/5511983969849?text=Olá, gostaria de fazer um orçamento!";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md py-3"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center group">
          <img
            src={logo}
            alt="MSW Locação de Máquinas e Equipamentos"
            className="h-12 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-foreground/80 hover:text-primary font-medium transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg" className="gap-2">
              <Phone className="w-5 h-5" />
              Solicitar Orçamento
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4"
          >
            <Button variant="hero" className="w-full gap-2">
              <Phone className="w-5 h-5" />
              Solicitar Orçamento
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
