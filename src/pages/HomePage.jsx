import { useState } from "react";
import { useTranslation } from "react-i18next";

export function HomePage() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="mb-4">
            <i className="fas fa-home"></i> {t("homeTitle")}
          </h1>
          <p className="lead text-muted">{t("homeDescription")}</p>

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
  );
}
