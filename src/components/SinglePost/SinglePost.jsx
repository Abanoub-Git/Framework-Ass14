import { NavLink, useParams } from "react-router-dom";
import data from "../../data/posts.json";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./SinglePost.module.css";

export default function SinglePost() {
  const { slug } = useParams();
  const post = data.posts.find((p) => p.slug === slug);
  if (!post) return <h2>المقال غير موجود</h2>;
  return (
    <>
      <Navbar />
      <section
        className={styles.hero}
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className={styles.overlay}></div>
        <div className={styles.heroContent}>
          <h1>{post.title}</h1>
          <div className={styles.authorBox}>
            <img src={post.author.avatar} alt="" />
            <div>
              <span className={styles.authorName}>{post.author.name}</span>
              <span className={styles.meta}>
                {post.date} • {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* ----------------------------- */}
      <section className={styles.page}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 order-lg-2">
              <div className={styles.content}>
                <p style={{ whiteSpace: "pre-line" }}>{post.content}</p>
              </div>
            </div>
            <div className="col-lg-3 order-lg-1 d-none d-lg-block">
              <div className={styles.sidebar}>
                <h5>
                  <span className={styles.mylisticon}>
                    <i class="fa-solid fa-list"></i>{" "}
                  </span>{" "}
                  محتويات المقال{" "}
                </h5>
                <ul>
                  <li>
                    {" "}
                    <span className={styles.Mylist}> 1 </span> المعدات الأساسية
                  </li>
                  <li>
                    {" "}
                    <span className={styles.Mylist}> 2 </span> توقيت التصوير
                  </li>
                  <li>
                    {" "}
                    <span className={styles.Mylist}> 3 </span> التكوين الفني
                  </li>
                  <li>
                    {" "}
                    <span className={styles.Mylist}> 4 </span> اعدادات الكاميرا
                  </li>
                  <li>
                    {" "}
                    <span className={styles.Mylist}> 5 </span> المعالجة اللاحقة
                  </li>
                  <li>
                    {" "}
                    <span className={styles.Mylist}> 6 </span> الخلاصة
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.tagsBox}>
            <h5 className="mb-2"><span className={styles.tagsIcon}><i className=" fa-solid fa-tags"></i></span> الوسوم </h5>
            <div className={styles.tags}>
              {post.tags &&
                post.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>
                    #{tag}
                  </span>
                ))}
            </div>
          </div>
          <div className={`${styles.shareSection} d-flex align-items-center justify-content-between`}>
            <div className={styles.shareHeader}>
              <span className={`${styles.shareIcon} ms-2`}>
                <i className="fa-solid fa-share-nodes"></i>
              </span>
              <h6>شارك المقال</h6>
            </div>
            <div className={styles.shareLinks}>
              <NavLink
                to="#"
                className={`${styles.shareBtn} ${styles.facebook}`}
                data-name="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </NavLink>
              <NavLink
                to="#"
                className={`${styles.shareBtn} ${styles.whatsapp}`}
                data-name="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </NavLink>
              <NavLink
                to="#"
                className={`${styles.shareBtn} ${styles.linkedin}`}
                data-name="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </NavLink>
              <NavLink
                to="#"
                className={`${styles.shareBtn} ${styles.twitter}`}
                data-name="X"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </NavLink>
            </div>
          </div>
          <div className={styles.authorCard}>
            <img src={post.author.avatar} alt="" />
            <div>
              <span className={styles.authorTitle}>كاتب المقال</span>
              <h4>{post.author.name}</h4>
              <p>{post.author.bio}</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
