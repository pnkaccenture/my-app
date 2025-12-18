import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navigation.css";

export function Navigation() {
  const { t } = useTranslation();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light sticky-top"
      style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-rocket"></i> MyApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/")}`} to="/">
                <i className="fas fa-home"></i> {t("home")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive("/about")}`} to="/about">
                <i className="fas fa-info-circle"></i> {t("aboutTitle")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/services")}`}
                to="/services"
              >
                <i className="fas fa-briefcase"></i> {t("servicesTitle")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/contact")}`}
                to="/contact"
              >
                <i className="fas fa-envelope"></i> {t("contactTitle")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/data-table")}`}
                to="/data-table"
              >
                <i className="fas fa-table"></i> {t("dataTableTitle")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
