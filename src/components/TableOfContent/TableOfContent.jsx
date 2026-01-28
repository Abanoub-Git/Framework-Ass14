import { useEffect, useState } from "react";
import stylesTOC from "./TableOfContent.module.css";

const sections = [
  { id: "why", title: "لماذا الساعة الذهبية؟" },
  { id: "prep", title: "التحضير المسبق" },
  { id: "settings", title: "إعدادات الكاميرا" },
  { id: "composition", title: "التكوين الفني" },
  { id: "summary", title: "الخلاصة" },
];

export default function TableOfContents() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";

      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop - 150;
          if (window.scrollY >= top) {
            current = section.id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={stylesTOC.sidebar}>
      <h5>محتويات المقال</h5>
      <ul>
        {sections.map(section => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={active === section.id ? stylesTOC.active : ""}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
