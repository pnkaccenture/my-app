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
      className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top"
      aria-label="Main navigation"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-rocket" aria-hidden="true"></i>
          <span> MyApp</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle main navigation menu"
        >
          <span className="navbar-toggler-icon" aria-hidden="true"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" role="menubar">
            <li className="nav-item" role="none">
              <Link
                className={`nav-link ${isActive("/")}`}
                to="/"
                aria-current={isActive("/") === "active" ? "page" : undefined}
                role="menuitem"
              >
                <i className="fas fa-home" aria-hidden="true"></i>
                <span> {t("home")}</span>
              </Link>
            </li>
            <li className="nav-item" role="none">
              <Link
                className={`nav-link ${isActive("/about")}`}
                to="/about"
                aria-current={
                  isActive("/about") === "active" ? "page" : undefined
                }
                role="menuitem"
              >
                <i className="fas fa-info-circle" aria-hidden="true"></i>
                <span> {t("aboutTitle")}</span>
              </Link>
            </li>
            <li className="nav-item" role="none">
              <Link
                className={`nav-link ${isActive("/services")}`}
                to="/services"
                aria-current={
                  isActive("/services") === "active" ? "page" : undefined
                }
                role="menuitem"
              >
                <i className="fas fa-briefcase" aria-hidden="true"></i>
                <span> {t("servicesTitle")}</span>
              </Link>
            </li>
            <li className="nav-item" role="none">
              <Link
                className={`nav-link ${isActive("/contact")}`}
                to="/contact"
                aria-current={
                  isActive("/contact") === "active" ? "page" : undefined
                }
                role="menuitem"
              >
                <i className="fas fa-envelope" aria-hidden="true"></i>
                <span> {t("contactTitle")}</span>
              </Link>
            </li>
            <li className="nav-item" role="none">
              <Link
                className={`nav-link ${isActive("/data-table")}`}
                to="/data-table"
                aria-current={
                  isActive("/data-table") === "active" ? "page" : undefined
                }
                role="menuitem"
              >
                <i className="fas fa-table" aria-hidden="true"></i>
                <span> {t("dataTableTitle")}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
