import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import AboutCss from "./About.module.css";
import blogData from "../../data/posts.json";
import { NavLink } from "react-router";

export default function About() {
  const authorsMap = new Map();
  blogData.posts.forEach((post) => {
    if (!authorsMap.has(post.author.name)) {
      authorsMap.set(post.author.name, post.author);
    }
  });
  const authors = Array.from(authorsMap.values());
  return (
    <>
      <Navbar />
      <section className={`${AboutCss.heroSection} d-flex align-items-center justify-content-center text-center`}>
        <div className={`container ${AboutCss.heroContent}`}>
          <span className={AboutCss.heroBadge}>
            <span className={AboutCss.dots}>
              <span className={AboutCss.dotStatic}></span>
              <span className={AboutCss.dotGlow}></span>
            </span>
            من نحن
          </span>
          <h1 className={AboutCss.heroTitle}>
            مهمتنا هي <span className={AboutCss.mycolor}>الإعلام والإلهام</span>
          </h1>
          <p className={`${AboutCss.heroSubtitle} text-secondary fs-4`}>
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
            ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
            المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
          </p>
          <div className={AboutCss.heroStats}>
            <div className={AboutCss.statBox}>
              <span>
                <i className="fa-solid fa-users fa-2x"></i>
              </span>
              <h4>+2مليون</h4>
              <p>قارئ شهرياً</p>
            </div>
            <div className={AboutCss.statBox}>
              <span>
                <i className="fa-solid fa-newspaper fa-2x"></i>
              </span>
              <h4>+500</h4>
              <p>تصنيف </p>
            </div>
            <div className={AboutCss.statBox}>
              <span>
                <i className="fa-solid fa-pen-nib fa-2x"></i>
              </span>
              <h4>+50</h4>
              <p>كاتب خبير</p>
            </div>
            <div className={AboutCss.statBox}>
              <span>
                <i className="fa-solid fa-book-open fa-2x"></i>
              </span>
              <h4>+15</h4>
              <p>تصنيفات</p>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------- */}
      <section className={AboutCss.valuesSection}>
        <div className="container">
          {/* Header */}
          <div className={AboutCss.sectionHeader}>
            <h2 className={AboutCss.title}>
              <span></span>
              قيمنا
              <span></span>
            </h2>

            <p className={AboutCss.subtitle}>
              المبادئ التي توجه كل ما نقوم بإنشائه
            </p>
          </div>

          {/* Cards */}
          <div className={AboutCss.grid}>
            <div className={AboutCss.card}>
              <i className="fa-solid fa-arrows-rotate"></i>
              <h4>دائماً محدث</h4>
              <p>أحدث الاتجاهات وأفضل الممارسات</p>
            </div>

            <div className={AboutCss.card}>
              <i className="fa-solid fa-handshake"></i>
              <h4>المجتمع</h4>
              <p>تعلم مع آلاف المصورين</p>
            </div>

            <div className={AboutCss.card}>
              <i className="fa-solid fa-bolt"></i>
              <h4>تركيز عملي</h4>
              <p>أمثلة واقعية يمكنك تطبيقها اليوم</p>
            </div>

            <div className={AboutCss.card}>
              <i className="fa-solid fa-bullseye"></i>
              <h4>الجودة أولاً</h4>
              <p>محتوى مدروس ومكتوب بخبرة</p>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------- */}
      <section className={AboutCss.teamSection}>
        <div className="container">
          <div className={AboutCss.sectionHeader}>
            <span className={AboutCss.badge}>فريقنا</span>
            <h2>تعرف على كتابنا</h2>
            <p>
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
              المجتمع.
            </p>
          </div>
          <div className={AboutCss.teamGrid}>
            {authors.map((author, index) => (
              <div key={index} className={AboutCss.teamCard}>
                <div className={AboutCss.avatarWrapper}>
                  <img src={author.avatar} alt={author.name} />
                  <span className={AboutCss.checkIcon}>
                    <i className="fa-solid fa-check"></i>
                  </span>
                </div>
                <h4>{author.name}</h4>
                <span className={AboutCss.role}>{author.role}</span>
                <div className={AboutCss.socials}>
                  <a href="#" className={AboutCss.linkedin}>
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="#" className={AboutCss.github}>
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a href="#" className={AboutCss.twitter}>
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* -------------------------------------- */}
      <section className={AboutCss.ctaSection}>
        <div className="container">
          <h2>لديك أسئلة؟ دعنا نتحدث!</h2>
          <p>
            نحب أن نسمع منك، سواء كان لديك سؤال حول محتوى، أو تريد المساهمة، أو
            تريد فقط إلقاء التحية، لا تتردد في التواصل.
          </p>
          <div className={AboutCss.ctaButtons}>
            <a href="mailto:your@email.com" className={AboutCss.darkBtn}>
              تواصل معنا
              <i className="fa-solid fa-envelope"></i>
            </a>
            <NavLink to="/blog" className={AboutCss.outlineBtn}>
              تصفح المقالات
            </NavLink>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
