import { Link } from "react-router";
import { CATEGORY_LABEL, formatDate, recentPosts } from "../data/posts";

export default function Home() {
  const posts = recentPosts(6);
  return (
    <div>
      <header className="border-b border-[#e5e2dc] px-6 lg:px-12 py-12 lg:py-20 flex flex-col items-end text-right">
        <p
          className="text-[#8c8a85] uppercase"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 12,
            letterSpacing: "1.4px",
            lineHeight: 1.7,
          }}
        >
          Tea_hojin의 작은 차 기록 보관소
          <br />
          생각과 감각을 기록하고 있습니다
        </p>
      </header>

      <div className="border-b border-[#e5e2dc] flex items-end justify-between px-6 lg:px-12 py-7 lg:py-9">
        <h2
          className="text-[#2c2c2c]"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 800,
            fontSize: 28,
            letterSpacing: "0.5px",
          }}
        >
          Recent Notes
        </h2>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {posts.map((p, i) => (
          <Link
            key={p.slug}
            to={`/${p.category}/${p.slug}`}
            className={`group bg-white border-b border-[#e5e2dc] ${
              i % 2 === 0 ? "sm:border-r" : ""
            } xl:border-r ${i % 3 === 2 ? "xl:!border-r-0" : ""}`}
          >
            <div className="aspect-[4/3] bg-[#f4f3f0] overflow-hidden border-b border-[#e5e2dc]">
              <img
                src={p.cover}
                alt={p.title}
                className="size-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
            <div className="p-7 lg:p-8 flex flex-col gap-3">
              <h3
                className="text-[#2c2c2c]"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontWeight: 500,
                  fontSize: 19,
                  lineHeight: 1.4,
                }}
              >
                {p.title}
              </h3>
              <p
                className="text-[#5a5854]"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontSize: 14,
                  lineHeight: 1.7,
                }}
              >
                {p.excerpt}
              </p>
              <div
                className="flex items-center justify-between pt-3 mt-2 border-t border-[#eceae3] text-[#8c8a85] uppercase"
                style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "1.2px" }}
              >
                <span>{CATEGORY_LABEL[p.category]}</span>
                <span>{formatDate(p.date)}</span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
