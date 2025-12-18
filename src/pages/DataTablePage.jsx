import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./DataTablePage.css";

export function DataTablePage() {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    fetchData();
  }, []);

  // Reset to first page when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=100"
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

  // Pagination calculations
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="container-fluid mt-5 mb-5">
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

          <div className="card shadow-sm mb-4">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <label htmlFor="itemsPerPage" className="form-label mb-0">
                  {t("itemsPerPage")}:
                </label>
              </div>
              <select
                id="itemsPerPage"
                className="form-select form-select-sm"
                style={{ width: "auto" }}
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
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
                    {paginatedData.length > 0 ? (
                      paginatedData.map((item) => (
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
              <div className="card-footer bg-white">
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                  <small className="text-muted">
                    {t("showingResults")}: {startIndex + 1}-
                    {Math.min(endIndex, filteredData.length)} {t("of")}{" "}
                    {filteredData.length}
                  </small>

                  <nav aria-label="Page navigation">
                    <ul className="pagination pagination-sm mb-0">
                      <li
                        className={`page-item ${
                          currentPage === 1 ? "disabled" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={handlePreviousPage}
                          disabled={currentPage === 1}
                        >
                          <i className="fas fa-chevron-left"></i>{" "}
                          {t("previous")}
                        </button>
                      </li>

                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <li
                            key={page}
                            className={`page-item ${
                              currentPage === page ? "active" : ""
                            }`}
                          >
                            <button
                              className="page-link"
                              onClick={() => handlePageClick(page)}
                            >
                              {page}
                            </button>
                          </li>
                        )
                      )}

                      <li
                        className={`page-item ${
                          currentPage === totalPages ? "disabled" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={handleNextPage}
                          disabled={currentPage === totalPages}
                        >
                          {t("next")} <i className="fas fa-chevron-right"></i>
                        </button>
                      </li>
                    </ul>
                  </nav>

                  <small className="text-muted">
                    {t("page")} {currentPage} {t("of")} {totalPages}
                  </small>
                </div>
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
