import { NavLink } from "react-router";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import NotFoundCss from "./NotFound.module.css";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <section className={`${NotFoundCss.heroSection} d-flex align-items-center justify-content-center text-center`}>
        <div className="container">
          <h1 className={NotFoundCss.code}>404</h1>
          <div className={NotFoundCss.iconWrapper}>
            <div className={NotFoundCss.iconCircle}>
              <i className="fa-regular fa-face-frown"></i>
            </div>
            <span className={NotFoundCss.dot}></span>
            <span className={NotFoundCss.dot2}></span>
          </div>
          <h2 className={NotFoundCss.title}>
            عفوًا! الصفحة غير موجودة
          </h2>
          <p className={NotFoundCss.subtitle}>
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
            دعنا نعيدك إلى المسار الصحيح.
          </p>
          <div className={NotFoundCss.buttons}>
            <NavLink to="/" className={NotFoundCss.primaryBtn}>
              <i className="fa-solid fa-house"></i>
              الذهاب للرئيسية
            </NavLink>
            <NavLink to="/blog" className={NotFoundCss.outlineBtn}>
              <i className=" fa-solid fa-newspaper"></i>
              تصفح المقالات
            </NavLink>
          </div>
          <div className={NotFoundCss.bottomLinks}>
            <NavLink to="/blog">المدونة</NavLink>
            <NavLink to="/about">من نحن</NavLink>
            <NavLink to="/">الرئسية</NavLink>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
