import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.min.css";
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
      <Navigation />
      <LanguageSwitcher />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/data-table" element={<DataTablePage />} />
      </Routes>
    </Router>
  );
}

export default App;
