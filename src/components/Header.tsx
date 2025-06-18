import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Icon name="Home" size={24} className="text-blue-600 mr-2" />
            <span className="text-xl font-bold text-gray-900">РемонтПро</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              О нас
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Наши работы
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Контакты
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Наши работы
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Контакты
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
