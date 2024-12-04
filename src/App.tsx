import React, { useState } from "react";
import HomeSection from "./components/HomeSection";
import Services from "./components/Service";
import About from "./components/About";
import ContactCard from "./components/ContactCard";

const TechServicesWebsite: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<
    "home" | "services" | "about" | "contact"
  >("home");

  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return <HomeSection />;
      case "services":
        return <Services />;
      case "about":
        return <About />;
      case "contact":
        return <ContactCard />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">WLTECH SOLUTIONS</div>
          <ul className="flex space-x-4">
            <li>
              <button
                onClick={() => setCurrentPage("home")}
                className={`hover:text-blue-200 ${
                  currentPage === "home" ? "text-blue-200" : ""
                }`}
              >
                Início
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage("services")}
                className={`hover:text-blue-200 ${
                  currentPage === "services" ? "text-blue-200" : ""
                }`}
              >
                Serviços
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage("about")}
                className={`hover:text-blue-200 ${
                  currentPage === "about" ? "text-blue-200" : ""
                }`}
              >
                Sobre
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage("contact")}
                className={`hover:text-blue-200 ${
                  currentPage === "contact" ? "text-blue-200" : ""
                }`}
              >
                Contato
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {renderContent()}
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 WLTECH SOLUTIONS. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default TechServicesWebsite;
