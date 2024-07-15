import { Link } from "react-router-dom";
const Index = () => {
  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>

        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card sales-card">
                    <div className="card-body">
                      <h5 className="card-title">
                        Sales <span>| Today</span>
                      </h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-cart"></i>
                        </div>
                        <div className="ps-3">
                          <h6>A</h6>
                          {/* <span className="text-success small pt-1 fw-bold">
                            12%
                          </span>
                          <span className="text-muted small pt-2 ps-1">
                            increase
                          </span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card revenue-card">
                    <div className="card-body">
                      <h5 className="card-title">
                        Products <span>| This Month</span>
                      </h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-gift"></i>
                        </div>
                        <div className="ps-3">
                          <h6>3,264</h6>
                          {/* <span className="text-success small pt-1 fw-bold">
                            8%
                          </span> */}
                          {/* <span className="text-muted small pt-2 ps-1">
                            increase
                          </span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-12">
                  <div className="card info-card customers-card">
                    <div className="card-body">
                      <h5 className="card-title">
                        Accounts <span>| This Year</span>
                      </h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-people"></i>
                        </div>
                        <div className="ps-3">
                          <h6>1244</h6>
                          {/* <span className="text-danger small pt-1 fw-bold">
                            12%
                          </span>
                          <span className="text-muted small pt-2 ps-1">
                            decrease
                          </span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="card recent-sales overflow-auto">
                    <div className="filter">
                      <Link className="icon" to="#" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots"></i>
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>

                        <li>
                          <Link className="dropdown-item" to="#">
                            Today
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            This Month
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            This Year
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* <div className="card-body">
                      <h5 className="card-title">
                        Recent Sales <span>| Today</span>
                        {loading && <p>Loading...</p>}
                        {error && <p>Error: {error}</p>}
                      </h5>

                      <table className="table table-borderless datatable">
                        <thead>
                          <tr>
                            <th scope="col">Sno</th>
                            <th scope="col">quantity</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sales.map((item) => (
                            <tr key={item.sale_id}>
                              <th scope="row">
                                <Link to="#">#2644</Link>
                              </th>
                              <td>{item.quantity}</td>
                              <td>
                                <Link to="#" className="text-primary">
                                  Sunt similique distinctio
                                </Link>
                              </td>
                              <td>{item.total_price}</td>
                              <td>
                                <span className="badge bg-success">
                                  Approved
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div> */}
                  </div>
                </div>

                <div className="col-12">
                  <div className="card top-selling overflow-auto">
                    <div className="filter">
                      <Link className="icon" to="#" data-bs-toggle="dropdown">
                        <i className="bi bi-three-dots"></i>
                      </Link>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>

                        <li>
                          <Link className="dropdown-item" to="#">
                            Today
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            This Month
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            This Year
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    Recent Activity <span>| Today</span>
                  </h5>

                  <div className="activity">
                    <div className="activity-item d-flex">
                      <div className="activite-label">32 min</div>
                      <i className="bi bi-circle-fill activity-badge text-success align-self-start"></i>
                      <div className="activity-content">
                        New Products listed
                        <Link to="#" className="fw-bold text-dark">
                          dawood
                        </Link>
                        mart
                      </div>
                    </div>

                    <div className="activity-item d-flex">
                      <div className="activite-label">56 min</div>
                      <i className="bi bi-circle-fill activity-badge text-danger align-self-start"></i>
                      <div className="activity-content">
                        last 3 month data was move to bin
                      </div>
                    </div>

                    <div className="activity-item d-flex">
                      <div className="activite-label">2 hrs</div>
                      <i className="bi bi-circle-fill activity-badge text-primary align-self-start"></i>
                      <div className="activity-content">
                        sales modules updated
                      </div>
                    </div>

                    <div className="activity-item d-flex">
                      <div className="activite-label">1 day</div>
                      <i className="bi bi-circle-fill activity-badge text-info align-self-start"></i>
                      <div className="activity-content">
                        last 3 days sale report
                        <Link to="#" className="fw-bold text-dark">
                          download by
                        </Link>
                        dawood
                      </div>
                    </div>

                    <div className="activity-item d-flex">
                      <div className="activite-label">2 days</div>
                      <i className="bi bi-circle-fill activity-badge text-warning align-self-start"></i>
                      <div className="activity-content">
                        10 products was return
                      </div>
                    </div>

                    <div className="activity-item d-flex">
                      <div className="activite-label">4 weeks</div>
                      <i className="bi bi-circle-fill activity-badge text-muted align-self-start"></i>
                      <div className="activity-content">stock updated</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
