import BlogCss from "./Blog.module.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import blogData from "../../data/posts.json";
import BlogCard from "../BlogCard/BlogCard.jsx";
import { useSearchParams } from "react-router-dom";


export default function Blog() {
  const [searchParams] = useSearchParams();
  const categoryFromURL = searchParams.get("category");
  const posts = blogData.posts;
const [activeCategory, setActiveCategory] = useState(
  categoryFromURL || "جميع المقالات"
);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const categories = [
    "جميع المقالات",
    ...new Set(posts.map(p => p.category))
  ];
  let filteredPosts = activeCategory === "جميع المقالات" ? posts : posts.filter(p => p.category === activeCategory);
  if (searchTerm.trim() !== "") {
    filteredPosts = filteredPosts.filter(p =>
      p.title.includes(searchTerm)
    );
  }
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <>
      <Navbar />
      <section className={`${BlogCss.heroSection} d-flex align-items-center justify-content-center text-center`}>
        <div className={`container ${BlogCss.heroContent}`}>
          <span className={BlogCss.heroBadge}>
            <span className={BlogCss.dots}>
              <span className={BlogCss.dotStatic}></span>
              <span className={BlogCss.booklogo}>
                <i className="fa-solid fa-book"></i>
              </span>
            </span>
            مدونتنا
          </span>
          <h1 className={BlogCss.heroTitle}>
            استكشف <span>مقالاتنا</span>
          </h1>
          <p className={`${BlogCss.heroSubtitle} text-secondary fs-4`}>
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>
      </section>
    {/* ----------------------------------------- */}
      <section className={BlogCss.blogSection}>
        <div className="container">
          <div className={BlogCss.filterTop}>
            <div className={BlogCss.tabs}>
              {categories.map(cat => (
                <button key={cat} onClick={() => { 
                    setActiveCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={activeCategory === cat ? BlogCss.activeTab : BlogCss.tabBtn}>
                  {cat}
                </button>
              ))}
            </div>
            <div className={BlogCss.searchBox}>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="ابحث في المقالات..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>
          <div className={BlogCss.resultsCount}>
            عرض <span>{filteredPosts.length}</span> مقالات
          </div>
          <div className={BlogCss.grid}>
            {currentPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          {activeCategory === "جميع المقالات" &&
            searchTerm === "" &&
            totalPages > 1 && (
              <div className={BlogCss.pagination}>
                {[...Array(totalPages)].map((_, i) => (
                  <button key={i} onClick={() => setCurrentPage(i + 1)} className={currentPage === i + 1 ? BlogCss.activePage : ""}>
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
        </div>
      </section>
      <Footer />
    </>
  );
}
