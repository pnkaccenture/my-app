import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./DataTablePage.css";

export function DataTablePage() {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      if (!response.ok) throw new Error("Failed to fetch data");
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1>
              <i className="fas fa-table"></i> {t("dataTableTitle")}
            </h1>
            <button
              className="btn btn-primary"
              onClick={fetchData}
              disabled={loading}
            >
              <i className="fas fa-sync"></i> {t("refresh")}
            </button>
          </div>

          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("searchPlaceholder")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>

          {loading && (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">{t("loading")}</p>
            </div>
          )}

          {error && (
            <div className="alert alert-danger" role="alert">
              <i className="fas fa-exclamation-circle"></i> {t("error")}:{" "}
              {error}
            </div>
          )}

          {!loading && !error && data.length > 0 && (
            <div className="card shadow-sm">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-dark">
                    <tr>
                      <th width="5%">{t("id")}</th>
                      <th width="20%">{t("userId")}</th>
                      <th width="35%">{t("title")}</th>
                      <th width="40%">{t("body")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.length > 0 ? (
                      filteredData.map((item) => (
                        <tr key={item.id} className="table-row">
                          <td>
                            <span className="badge bg-primary">{item.id}</span>
                          </td>
                          <td>
                            <span className="badge bg-info">
                              User {item.userId}
                            </span>
                          </td>
                          <td>
                            <strong>{item.title}</strong>
                          </td>
                          <td className="text-truncate-column">
                            {item.body.substring(0, 80)}...
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center text-muted py-4">
                          <i className="fas fa-inbox"></i> {t("noResults")}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="card-footer bg-white text-muted">
                <small>
                  {t("showingResults")}: {filteredData.length} / {data.length}
                </small>
              </div>
            </div>
          )}

          <div className="alert alert-info mt-4" role="alert">
            <i className="fas fa-lightbulb"></i> {t("dataInfo")}
          </div>
        </div>
      </div>
    </div>
  );
}
