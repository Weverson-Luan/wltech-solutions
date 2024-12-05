import React, { useState } from "react";
import HomeSection from "./components/HomeSection";
import Services from "./components/Service";
import About from "./components/About";
import ContactCard from "./components/ContactCard";
import Header from "./components/Header";

const TechServicesWebsite: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<
    "home" | "services" | "about" | "contact" | string
  >("home");

  function renderContent() {
    switch (currentPage) {
      case "home":
        return <HomeSection />;
      case "services":
        return <Services />;
      case "about":
        return <About />;
      case "contact":
        return <ContactCard />;

      default:
        return "Não encontrado tela";
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="flex-grow container mx-auto px-4 py-8">
        {renderContent()}
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 EW TECH. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default TechServicesWebsite;
