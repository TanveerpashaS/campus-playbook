import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">
                The Campus Playbook
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('features')}
                className="nav-link"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('mission')}
                className="nav-link"
              >
                Our Mission
              </button>
              <button className="btn-hero">
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          <div 
            className="mobile-menu-backdrop"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-20 left-6 right-6 z-50 bg-background rounded-2xl border border-border shadow-lg">
            <div className="p-6 space-y-6">
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left nav-link text-lg"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('mission')}
                className="block w-full text-left nav-link text-lg"
              >
                Our Mission
              </button>
              <button className="btn-hero w-full">
                Login
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;