import { useState, useEffect } from "react";
import logo from "@/assets/realizzati-logo-horizontal.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <img
            src={logo}
            alt="Realizzati Móveis"
            className={`transition-all duration-300 ${
              scrolled ? "h-10" : "h-14 brightness-0 invert"
            }`}
          />
          <button
            onClick={scrollToForm}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
