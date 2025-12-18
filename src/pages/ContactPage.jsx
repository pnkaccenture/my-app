import { useTranslation } from "react-i18next";

export function ContactPage() {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="mb-4 text-center">
            <i className="fas fa-envelope"></i> {t("contactTitle")}
          </h1>
          <p className="lead text-muted text-center">
            {t("contactDescription")}
          </p>

          <div className="row mt-5">
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-envelope text-primary"></i>{" "}
                    {t("email")}
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="fas fa-phone text-primary"></i> {t("phone")}
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-map-marker text-primary"></i>{" "}
                {t("address")}
              </h5>
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title mb-3">
                <i className="fas fa-paper-plane"></i> Send us a Message
              </h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  <i className="fas fa-send"></i> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
