import Navbar from "../Navbar/Navbar";
import HomeCss from "./Home.module.css";
import card1_holder from "../../assets/card1_holder.jpg";
import card2_holder from "../../assets/card2_holder.jpg";
import card3_holder from "../../assets/card3_holder.jpg";
import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/photo2.jpg";
import photo3 from "../../assets/photo3.jpg";
import Footer from "../Footer/Footer";
import { NavLink,Link } from "react-router";
import postsData from "../../data/posts.json";

export default function Home() {
  const featuredPosts = postsData.posts.slice(0, 3);
  return (
    <>
      <Navbar />
      <section
        className={`${HomeCss.heroSection} d-flex align-items-center justify-content-center text-center`}
      >
        <div className={`container ${HomeCss.heroContent}`}>
          <span className={HomeCss.heroBadge}>
            <span className={HomeCss.dots}>
              <span className={HomeCss.dotStatic}></span>
              <span className={HomeCss.dotGlow}></span>
            </span>
            مرحباً بك في عدسة
          </span>
          <h1 className={HomeCss.heroTitle}>
            اكتشف فن <br />
            <span>التصوير الفوتوغرافي</span>
          </h1>
          <p className={`${HomeCss.heroSubtitle} text-secondary fs-4`}>
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير
          </p>
          <div className={HomeCss.heroButtons}>
            <button className={`${HomeCss.btnMain} fw-bold`}>
              <NavLink to="/blog" className="text-decoration-none text-white">
                استكشف المقالات ←
              </NavLink>
            </button>
            <button className={`${HomeCss.btnOutline} fw-bold`}>
              <NavLink to="/about" className="text-decoration-none text-white">
                {" "}
                <i class="fa-solid fa-circle-exclamation text-secondary"></i>{" "}
                اعرف المزيد
              </NavLink>
            </button>
          </div>
          <div className={HomeCss.heroStats}>
            <div className={HomeCss.statBox}>
              <span>
                <i className="fa-solid fa-newspaper fa-2x"></i>
              </span>
              <h4>50+</h4>
              <p>مقالة</p>
            </div>
            <div className={HomeCss.statBox}>
              <span>
                <i className="fa-solid fa-users fa-2x"></i>
              </span>
              <h4>10K+</h4>
              <p>قارئ</p>
            </div>
            <div className={HomeCss.statBox}>
              <span>
                <i className="fa-solid fa-folder-open fa-2x"></i>
              </span>
              <h4>4</h4>
              <p>تصنيفات</p>
            </div>
            <div className={HomeCss.statBox}>
              <span>
                <i className="fa-solid fa-pen-nib fa-2x"></i>
              </span>
              <h4>6</h4>
              <p>كاتب</p>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------------- */}
      <section className={HomeCss.featuredSection}>
        <div className="container">
          <div className={HomeCss.featuredHeader}>
            <div>
              <span className={HomeCss.smallBadge}>
                <span className={HomeCss.dots}>
                  <span className={HomeCss.dotStatic}></span>
                  <span className={HomeCss.dotGlow}></span>
                </span>
                مميز
              </span>
              <h2 className={HomeCss.sectionTitle}>مقالات مختارة</h2>
              <p className={HomeCss.sectionSubtitle}>
                محتوى منتقى لبدء رحلة تعلمك
              </p>
            </div>
            <button className={`${HomeCss.viewAllBtn} fw-bold`}>
              <NavLink to="/blog" className=" text-decoration-none text-white">
                عرض الكل &gt;
              </NavLink>
            </button>
          </div>
          {featuredPosts.map((post) => (
            <div key={post.id} className={HomeCss.featuredCard}>
              <div className={HomeCss.cardContent}>
                <div className={HomeCss.cardMeta}>
                  <span className={HomeCss.category}>{post.category}</span>
                  <span>
                    {post.readTime} <i className="fa-regular fa-clock"></i>
                  </span>
                </div>
                <h3 className={HomeCss.cardTitle}>{post.title}</h3>
                <p className={HomeCss.cardDesc}>{post.excerpt}</p>
                <div className={HomeCss.cardFooter}>
                  <Link to={`/blog/${post.slug}`} className={HomeCss.readMore}>
                    ← اقرأ المقال
                  </Link>
                  <div className={HomeCss.author}>
                    <div className={HomeCss.avatarWrapper}>
                      <img src={post.author.avatar} alt="" />
                      <span className={HomeCss.statusDot}></span>
                    </div>
                    <div>
                      <h6>{post.author.name}</h6>
                      <small>{post.date}</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className={HomeCss.cardImage}>
                <div className={HomeCss.cardImageInner}>
                  <img src={post.image} alt="" className={HomeCss.myimage} />
                </div>
                <span className={HomeCss.imageBadge}>
                  <i className="fa-solid fa-star"></i> مميز
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ---------------------------------------- */}
      <section className={HomeCss.categoriesSection}>
        <div className="container">
          <div className="header">
            <div className="text-center">
              <span className={HomeCss.smallBadge}>
                <span className={HomeCss.dots}>
                  <span className={HomeCss.dotStatic}></span>
                  <span className={HomeCss.dotGlow}></span>
                </span>
                التصنيفات
              </span>
            </div>
            <h2 className=" display-2 fw-bold text-center my-4">
              استكشف حسب الموضوع
            </h2>
            <p className=" text-secondary text-center my-5">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>
          </div>
          <div className={HomeCss.categoriesGrid}>
            <Link
              to="/blog?category=إضاءة"
              className={`${HomeCss.categoryCard} text-decoration-none text-white`}
            >
              <div className={HomeCss.categoryIcon}>
                <i className="fa-solid fa-sun"></i>
              </div>
              <h5>إضاءة</h5>
              <span>3 مقالات</span>
              <span className={HomeCss.cardArrow}>
                <i className="fa-solid fa-arrow-left"></i>
              </span>
            </Link>
            <Link
              to="/blog?category=بورتريه"
              className={`${HomeCss.categoryCard} text-decoration-none text-white`}
            >
              <div className={HomeCss.categoryIcon}>
                <i className="fa-solid fa-user"></i>
              </div>
              <h5>بورتريه</h5>
              <span>3 مقالات</span>
              <span className={HomeCss.cardArrow}>
                <i className="fa-solid fa-arrow-left"></i>
              </span>
            </Link>
            <Link
              to="/blog?category=مناظر طبيعية"
              className={`${HomeCss.categoryCard} text-decoration-none text-white`}
            >
              <div className={HomeCss.categoryIcon}>
                <i className="fa-solid fa-mountain"></i>
              </div>
              <h5>مناظر طبيعية</h5>
              <span>2 مقالة</span>
              <span className={HomeCss.cardArrow}>
                <i className="fa-solid fa-arrow-left"></i>
              </span>
            </Link>
            <Link
              to="/blog?category=تقنيات"
              className={`${HomeCss.categoryCard} text-decoration-none text-white`}
            >
              <div className={HomeCss.categoryIcon}>
                <i className="fa-solid fa-sliders"></i>
              </div>
              <h5>تقنيات</h5>
              <span>5 مقالات</span>
              <span className={HomeCss.cardArrow}>
                <i className="fa-solid fa-arrow-left"></i>
              </span>
            </Link>
            <Link
              to="/blog?category=معدات"
              className={`${HomeCss.categoryCard} text-decoration-none text-white`}
            >
              <div className={HomeCss.categoryIcon}>
                <i className="fa-solid fa-gear"></i>
              </div>
              <h5>معدات</h5>
              <span>3 مقالات</span>
              <span className={HomeCss.cardArrow}>
                <i className="fa-solid fa-arrow-left"></i>
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/* ---------------------------------------- */}
      <section className={HomeCss.latestSection}>
        <div className="container">
          <span className={`${HomeCss.smallBadge} mb-3`}>
            <span className={HomeCss.dots}>
              <span className={HomeCss.dotStatic}></span>
              <span className={HomeCss.dotGlow}></span>
            </span>
            الاحدث
          </span>
          <div className="d-flex justify-content-between align-items-center mb-5">
            <div>
              <h2 className={HomeCss.latestTitle}>أحدث المقالات</h2>
              <p className={HomeCss.latestSubtitle}>
                محتوى جديد طازج من المطبعة
              </p>
            </div>
            <NavLink to="/blog" className={HomeCss.viewAllLink}>
              عرض جميع المقالات ←
            </NavLink>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 col-12">
              <div className={HomeCss.blogCard}>
                <div className={HomeCss.blogImage}>
                  <img
                    src={photo3}
                    alt="blog"
                    className={HomeCss.blogImageInner}
                  />
                  <span className={HomeCss.blogBadge}>تقنيات</span>
                </div>
                <div className={HomeCss.blogContent}>
                  <div className={HomeCss.blogMeta}>
                    <span>
                      7 دقائق <i className=" fa-regular fa-clock"></i>
                    </span>
                    <span>يناير 2024</span>
                  </div>
                  <h5 className={HomeCss.blogTitle}>
                    أساسيات إعدادات الكاميرا:مثلث التعريض الضوئي
                  </h5>
                  <p className={HomeCss.blogDesc}>
                    للتحكم الكامل في الصور يجب فهم فتحة العدسة وسرعة الغالق
                    وحساسية ISO.
                  </p>
                  <div className="border border-bottom border-secondary mb-3"></div>
                  <div className={HomeCss.blogFooter}>
                    <div className={HomeCss.author}>
                      <img src={card3_holder} alt="" />
                      <span>داود خالد</span>
                    </div>
                    <span className={HomeCss.arrowBtn}>
                      <i className="fa-solid fa-arrow-left"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className={HomeCss.blogCard}>
                <div className={HomeCss.blogImage}>
                  <img
                    src={photo2}
                    alt="blog"
                    className={HomeCss.blogImageInner}
                  />
                  <span className={HomeCss.blogBadge}>تقنيات</span>
                </div>
                <div className={HomeCss.blogContent}>
                  <div className={HomeCss.blogMeta}>
                    <span>
                      6 دقائق <i className=" fa-regular fa-clock"></i>
                    </span>
                    <span>يناير 2024</span>
                  </div>
                  <h5 className={HomeCss.blogTitle}>
                    قواعد التكوين الفوتوجرافي :كيف تجعل صورك اكثر جاذبية
                  </h5>
                  <p className={HomeCss.blogDesc}>
                    تعلم قواعد التكوين الأساسية لإنشاء صور قوية بصرياًالتي
                    يستخدمونها المحترفين
                  </p>
                  <div className="border border-bottom border-secondary mb-3"></div>
                  <div className={HomeCss.blogFooter}>
                    <div className={HomeCss.author}>
                      <img src={card2_holder} alt="" />
                      <span>بث محمود</span>
                      <span></span>
                    </div>
                    <span className={HomeCss.arrowBtn}>
                      <i className="fa-solid fa-arrow-left"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className={HomeCss.blogCard}>
                <div className={HomeCss.blogImage}>
                  <img
                    src={photo1}
                    alt="blog"
                    className={HomeCss.blogImageInner}
                  />
                  <span className={HomeCss.blogBadge}>معدات</span>
                </div>
                <div className={HomeCss.blogContent}>
                  <div className={HomeCss.blogMeta}>
                    <span>
                      8 دقائق للقراءة <i className=" fa-regular fa-clock"></i>
                    </span>
                    <span>يناير 2024</span>
                  </div>
                  <h5 className={HomeCss.blogTitle}>
                    تصوير الموبايل: كيف تلتقط صور احترافية بهاتفك
                  </h5>
                  <p className={HomeCss.blogDesc}>
                    اكتشف كيف تحول هاتفك إلى أداة تصوير قوية مع هذه النصائح
                    والتقنيات.
                  </p>
                  <div className="border border-bottom border-secondary mb-3"></div>
                  <div className={HomeCss.blogFooter}>
                    <div className={HomeCss.author}>
                      <img src={card1_holder} alt="" />
                      <span>جمال عبد الله</span>
                    </div>
                    <span className={HomeCss.arrowBtn}>
                      <i className="fa-solid fa-arrow-left"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----------------------------------------------------- */}
      <section className={HomeCss.newsletterSection}>
        <div className="container">
          <div className={HomeCss.newsletterBox}>
            <div className={HomeCss.mailIcon}>
              <i className="fa-regular fa-envelope"></i>
            </div>
            <h2 className={HomeCss.newsletterTitle}>
              اشترك في <span>نشرتنا الإخبارية</span>
            </h2>
            <p className={HomeCss.newsletterSubtitle}>
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
              الإلكتروني
            </p>
            <div className={HomeCss.newsletterForm}>
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className={HomeCss.emailInput}
              />
              <button className={HomeCss.subscribeBtn}>اشترك الآن</button>
            </div>
            <div className={HomeCss.newsletterFooter}>
              <div className={HomeCss.avatars}>
                <img src={card1_holder} alt="" />
                <img src={card2_holder} alt="" />
                <img src={card3_holder} alt="" />
              </div>
              <span className="yess">
                انضم لـ <span className="fw-bold">+10,000</span> مصور • بدون
                إزعاج • إلغاء الاشتراك في أي وقت
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
