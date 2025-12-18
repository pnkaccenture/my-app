import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <div className="language-switcher">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="languageDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fas fa-globe"></i> {t("language")}
        </button>
        <ul className="dropdown-menu" aria-labelledby="languageDropdown">
          <li>
            <button
              className={`dropdown-item ${
                i18n.language === "en" ? "active" : ""
              }`}
              onClick={() => handleLanguageChange("en")}
            >
              {t("english")}
            </button>
          </li>
          <li>
            <button
              className={`dropdown-item ${
                i18n.language === "fr" ? "active" : ""
              }`}
              onClick={() => handleLanguageChange("fr")}
            >
              {t("french")}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
