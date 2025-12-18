import { useTranslation } from "react-i18next";

export function ServicesPage() {
  const { t } = useTranslation();

  const services = [
    { icon: "fa-code", title: t("service1") },
    { icon: "fa-mobile", title: t("service2") },
    { icon: "fa-cloud", title: t("service3") },
    { icon: "fa-handshake", title: t("service4") },
  ];

  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h1 className="mb-4 text-center">
            <i className="fas fa-briefcase"></i> {t("servicesTitle")}
          </h1>
          <p className="lead text-muted text-center">
            {t("servicesDescription")}
          </p>

          <div className="row g-4 mt-4">
            {services.map((service, index) => (
              <div key={index} className="col-md-6">
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <i
                      className={`fas ${service.icon} fa-3x text-primary mb-3`}
                    ></i>
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text text-muted">
                      High-quality {service.title.toLowerCase()} tailored to
                      your needs.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="alert alert-info mt-5" role="alert">
            <i className="fas fa-lightbulb"></i> Contact us today to learn more
            about how we can help your business grow!
          </div>
        </div>
      </div>
    </div>
  );
}
