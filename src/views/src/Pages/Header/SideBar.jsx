import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link collapsed"
              data-bs-target="#components-nav"
              data-bs-toggle="collapse"
              to="#"
            >
              <i className="bi bi-gift"></i>
              <span>Voucher</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </Link>
            {/* product elements start */}
            <ul
              id="components-nav"
              className="nav-content collapse"
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <Link to="/vouchers">
                  <i className="bi bi-circle"></i>
                  <span>Vouchers</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default SideBar;
