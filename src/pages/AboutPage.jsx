import { useTranslation } from "react-i18next";

export function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="mb-4">
            <i className="fas fa-info-circle"></i> {t("aboutTitle")}
          </h1>

          <div className="card">
            <div className="card-body">
              <p className="lead">{t("aboutDescription")}</p>

              <h5 className="mt-4 mb-3">
                <i className="fas fa-star"></i> Key Features
              </h5>
              <ul className="list-group">
                <li className="list-group-item">
                  <i className="fas fa-check text-success"></i> Multilingual
                  Support (English & French)
                </li>
                <li className="list-group-item">
                  <i className="fas fa-check text-success"></i> Built with
                  Bootstrap 5
                </li>
                <li className="list-group-item">
                  <i className="fas fa-check text-success"></i> React Router
                  Integration
                </li>
                <li className="list-group-item">
                  <i className="fas fa-check text-success"></i> Font Awesome
                  Icons
                </li>
              </ul>

              <div className="alert alert-success mt-4" role="alert">
                <i className="fas fa-check-circle"></i> This application
                demonstrates modern React development practices with responsive
                design.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
