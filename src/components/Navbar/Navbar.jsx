import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar} fixed-top`}>
      <div className="container d-flex align-items-center justify-content-between">
        <NavLink
          className="d-flex align-items-center gap-2 text-decoration-none"
          to="/"
        >
          <img src={logo} alt="logo" className={styles.logo} />
          <div>
            <h5 className="m-0 text-white">عدسة</h5>
            <small className={`${styles.tagline} d-none d-md-block`}>
              عالم التصوير الفوتوغرافي
            </small>
          </div>
        </NavLink>
        <div className={`${styles.linksWrapper} d-none d-lg-block`}>
          <ul className="navbar-nav flex-row gap-4 m-0">
            <li className="nav-item">
              <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? styles.active : styles.link}`}>
                الرئيسية
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blog" className={({ isActive }) => `nav-link ${isActive ? styles.active : styles.link}`}>
                المدونة
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? styles.active : styles.link}`}>
                من نحن
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="d-none d-lg-flex align-items-center gap-3">
          <i className={`fa-solid fa-magnifying-glass ${styles.searchIcon}`}></i>
          <NavLink to="/blog" className={`${styles.readBtn} text-decoration-none`}>
            ابدأ القراءة
          </NavLink>
        </div>

        {/* For Mobile */}
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div
        className={`offcanvas offcanvas-start ${styles.mobileMenu} d-lg-none`}
        tabIndex="-1"
        id="mobileMenu"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column gap-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? styles.mobileActive : styles.mobileLink
            }
          >
            الرئيسية
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? styles.mobileActive : styles.mobileLink
            }
          >
            المدونة
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.mobileActive : styles.mobileLink
            }
          >
            من نحن
          </NavLink>
          <NavLink
            to="/blog"
            className={`${styles.readBtn} w-100 mt-3 text-decoration-none`}
          >
            ابدأ القراءة
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
