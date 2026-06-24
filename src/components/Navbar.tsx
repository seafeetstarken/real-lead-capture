import { useState, useEffect } from "react";
import logo from "@/assets/logo-horizontal-light.png";

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
        scrolled ? "bg-secondary/90 backdrop-blur-md shadow-lg py-3 border-b border-primary/10" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {scrolled && (
            <img
              src={logo}
              alt="Realizzati Móveis"
              className="transition-all duration-300 h-10"
            />
          )}
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
