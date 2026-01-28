import { NavLink } from "react-router";
import FooterCss from "./Footer.module.css";
export default function Footer() {
    return (
    <>
        <footer className={FooterCss.footer}>
        <div className="container">
            <div className={FooterCss.footerGrid}>
            <div className={FooterCss.footerCol}>
                <div className={FooterCss.logoWrapper}>
                <div className={FooterCss.logoBox}>ع</div>
                <h4 className={FooterCss.footerLogo}>عدسة</h4>
              </div>
              <p className=" text-secondary">
                مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار
                المحترفين ونصائح عملية لتطوير مهاراتكم.
              </p>
              <div className={FooterCss.socialIcons}>
                <a
                  href="https://www.youtube.com"
                  className=" text-decoration-none text-secondary"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a
                  href="https://www.linkedin.com"
                  className=" text-decoration-none text-secondary"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://www.github.com"
                  className=" text-decoration-none text-secondary"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.twitter.com"
                  className=" text-decoration-none text-secondary"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </div>
            </div>
            <div className={FooterCss.footerCol}>
              <h5 className=" mb-3">استكشف</h5>
              <ul>
                <NavLink to="/" className="text-decoration-none"><li>الرئيسية</li></NavLink>
                <NavLink to="/blog" className="text-decoration-none"><li>المدونة</li></NavLink>
                <NavLink to="/about" className="text-decoration-none"><li>من نحن</li></NavLink>
              </ul>
            </div>
            <div className={FooterCss.footerCol}>
              <h5 className=" mb-3">التصنيفات</h5>
              <ul>
                <li>إضاءة</li>
                <li>بورتريه</li>
                <li>مناظر طبيعية</li>
                <li>تقنيات</li>
              </ul>
            </div>
            <div className={FooterCss.footerCol}>
              <h5 className=" mb-3">ابقى على اطلاع</h5>
              <p className=" text-secondary">
                اشترك للحصول على أحدث المقالات والتحديثات.
              </p>
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className={FooterCss.footerInput}
              />
              <button className={FooterCss.footerBtn}>اشترك</button>
            </div>
          </div>
          <div className={FooterCss.footerBottom}>
            <span>
              © 2026 عدسة صنع بكل{" "}
              <span>
                <i className=" fa-solid fa-heart text-warning"></i>
              </span>{" "}
              - جميع الحقوق محفوظة
            </span>
            <div>
              <span>سياسة الخصوصية</span>
              <span className=" me-3">شروط الخدمة</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
