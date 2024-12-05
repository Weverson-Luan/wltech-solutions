import { useState } from "react";

const Header: React.FC<{
  currentPage: string;
  setCurrentPage: React.Dispatch<
    "home" | "services" | "about" | "contact" | string
  >;
}> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 50"
            width="50"
            height="50"
          >
            <circle cx="50" cy="25" r="23" fill="#ffffff00" />
            <path
              d="M30,15 L40,15 L40,18 L33,18 L33,23 L40,23 L40,26 L33,26 L33,32 L40,32 L40,35 L30,35 Z"
              fill="#FFFFFF"
            />
            <path
              d="M50,15 L53,35 L56,25 L59,35 L62,15 L65,15 L59,37 L56,26 L53,37 L47,15 Z"
              fill="#FFFFFF"
            />
          </svg>
          TECH
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          {["home", "services", "about", "contact"].map(page => (
            <li key={page}>
              <button
                onClick={() => setCurrentPage(page)}
                className={`hover:text-blue-200 ${
                  currentPage === page ? "text-blue-200" : ""
                }`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-blue-600 mt-2 p-4 space-y-2">
          {["home", "services", "about", "contact"].map(page => (
            <li key={page}>
              <button
                onClick={() => {
                  setCurrentPage(page);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left hover:text-blue-200 ${
                  currentPage === page ? "text-blue-200" : ""
                }`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
