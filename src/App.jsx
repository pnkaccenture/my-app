import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./accessibility.css";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ContactPage } from "./pages/ContactPage";
import { DataTablePage } from "./pages/DataTablePage";

function App() {
  useTranslation();

  return (
    <Router>
      {/* Skip to Main Content Link (WCAG AA Requirement) */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      <Navigation />
      <LanguageSwitcher />

      {/* Main Content Region */}
      <main id="main-content" role="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/data-table" element={<DataTablePage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
