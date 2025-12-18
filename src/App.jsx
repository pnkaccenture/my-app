import { useState } from "react";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.min.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { LanguageSwitcher } from "./components/LanguageSwitcher";

function App() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  return (
    <>
      <LanguageSwitcher />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="text-center">
              <a href="https://vite.dev" target="_blank" rel="noreferrer">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank" rel="noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1 className="mt-4 mb-3">{t("welcome")}</h1>
            <p className="text-muted">{t("description")}</p>

            <div className="card mt-4">
              <div className="card-body text-center">
                <h5 className="card-title">{t("counter")}</h5>
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => setCount((count) => count + 1)}
                >
                  <i className="fas fa-plus"></i> {t("countMessage", { count })}
                </button>
                <p className="mt-3 text-secondary">{t("editInstructions")}</p>
              </div>
            </div>

            <div className="alert alert-info mt-4" role="alert">
              <i className="fas fa-info-circle"></i> {t("selectLanguage")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
