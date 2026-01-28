import { useNavigate } from "react-router-dom";
import styles from "./BlogCard.module.css";

export default function BlogCard({ post }) {
  const navigate = useNavigate();

  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/blog/${post.slug}`)}
      style={{ cursor: "pointer" }}
    >
      <div className={styles.imageWrapper}>
        <img src={post.image} alt={post.title} />
        <span className={styles.badge}>{post.category}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span>
            {post.readTime} <i className="fa-regular fa-clock"></i>
          </span>
          <span>{post.date}</span>
        </div>
        <h4>{post.title}</h4>
        <p className="text-secondary py-3">{post.excerpt}</p>
        <div className="border border-bottom border-secondary mb-3"></div>
        <div className={styles.footer}>
          <div className={styles.author}>
            <img
              src={post.author.avatar}
              alt=""
              className="rounded-circle"
            />
            <span>{post.author.name}</span>
          </div>
          <span className={styles.arrow}>
            <i className="fa-solid fa-arrow-left"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
