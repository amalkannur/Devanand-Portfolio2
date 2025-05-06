
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-heading font-semibold text-blue-600">
          Devanand.
        </a>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {["Home", "About", "Services", "Portfolio", "Testimonials", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-neutral-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 md:hidden">
            <ul className="flex flex-col space-y-3">
              {["Home", "About", "Services", "Portfolio", "Testimonials", "Contact"].map(
                (item) => (
                  <li key={item} className="px-4">
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-neutral-700 hover:text-blue-600 transition-colors font-medium block py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;