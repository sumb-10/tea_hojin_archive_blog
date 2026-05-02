import { Link, Navigate, useParams } from "react-router";
import {
  CATEGORY_LABEL,
  Category,
  adjacentPosts,
  findPost,
  formatDate,
} from "../data/posts";

const VALID: Category[] = ["tea-log", "teawares", "notes"];

export default function Article() {
  const { category, slug } = useParams();
  if (!category || !slug || !VALID.includes(category as Category)) {
    return <Navigate to="/" replace />;
  }
  const cat = category as Category;
  const post = findPost(cat, slug);
  if (!post) return <Navigate to={`/${cat}`} replace />;

  const { prev, next } = adjacentPosts(cat, slug);

  return (
    <article>
      <div className="px-6 lg:px-24 pt-12 lg:pt-20 pb-10 lg:pb-14 flex flex-col gap-7 lg:gap-9 max-w-[860px] mx-auto lg:mx-0">
        <div
          className="flex items-center gap-3 text-[#8c8a85] uppercase flex-wrap"
          style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "1.4px" }}
        >
          <Link to={`/${cat}`} className="hover:text-[#2c2c2c] transition-colors">
            {CATEGORY_LABEL[cat]}
          </Link>
          <span>·</span>
          <span>{formatDate(post.date)}</span>
        </div>

        <h1
          className="text-[#2c2c2c]"
          style={{
            fontFamily: "'Noto Serif KR', serif",
            fontWeight: 600,
            fontSize: 36,
            lineHeight: 1.3,
            letterSpacing: "-0.5px",
          }}
        >
          {post.title}
          {post.subtitle && (
            <span className="text-[#a8a59f]"> · {post.subtitle}</span>
          )}
        </h1>

        <p
          className="text-[#5a5854]"
          style={{
            fontFamily: "'Noto Serif KR', serif",
            fontSize: 17,
            lineHeight: 1.75,
          }}
        >
          {post.excerpt}
        </p>

        <div className="aspect-[4/3] bg-[#f4f3f0] overflow-hidden border border-[#e5e2dc]">
          <img src={post.cover} alt={post.title} className="size-full object-cover" />
        </div>
      </div>

      <div className="px-6 lg:px-24 pb-16 flex flex-col gap-6 max-w-[760px] mx-auto lg:mx-0">
        {post.body.map((b, i) => {
          if (b.type === "h2")
            return (
              <h2
                key={i}
                className="text-[#2c2c2c] mt-3"
                style={{
                  fontFamily: "'Noto Serif KR', serif",
                  fontWeight: 500,
                  fontSize: 24,
                }}
              >
                {b.text}
              </h2>
            );
          if (b.type === "quote")
            return (
              <blockquote key={i} className="border-l-2 border-[#c3b9a2] pl-6 py-3 my-3">
                <p
                  className="text-[#5a5854] italic"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 18,
                    lineHeight: 1.75,
                  }}
                >
                  “{b.text}”
                </p>
                {b.cite && (
                  <p
                    className="text-[#8c8a85] uppercase mt-3"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 11,
                      letterSpacing: "1.4px",
                    }}
                  >
                    — {b.cite}
                  </p>
                )}
              </blockquote>
            );
          return (
            <p
              key={i}
              className="text-[#2c2c2c]"
              style={{
                fontFamily: "'Noto Serif KR', serif",
                fontSize: 17,
                lineHeight: 1.9,
              }}
            >
              {b.text}
            </p>
          );
        })}

        {post.meta && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-[#e5e2dc] border border-[#e5e2dc] mt-6">
            {post.meta.map((m) => (
              <div key={m.label} className="bg-[#fdfcfb] p-5">
                <p
                  className="text-[#8c8a85] uppercase mb-2"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 10,
                    letterSpacing: "1.4px",
                  }}
                >
                  {m.label}
                </p>
                <p
                  className="text-[#2c2c2c]"
                  style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 15 }}
                >
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <nav className="border-t border-[#e5e2dc] grid grid-cols-1 sm:grid-cols-2">
        <PrevNext post={prev} dir="prev" cat={cat} />
        <PrevNext post={next} dir="next" cat={cat} />
      </nav>
    </article>
  );
}

function PrevNext({
  post,
  dir,
  cat,
}: {
  post: ReturnType<typeof findPost> | undefined;
  dir: "prev" | "next";
  cat: Category;
}) {
  const align = dir === "next" ? "sm:text-right" : "";
  const border = dir === "prev" ? "sm:border-r border-[#e5e2dc]" : "border-t sm:border-t-0 border-[#e5e2dc]";
  if (!post)
    return (
      <div className={`px-6 lg:px-12 py-10 ${border} ${align}`}>
        <p
          className="text-[#a8a59f] uppercase"
          style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "1.4px" }}
        >
          {dir === "prev" ? "← Earliest entry" : "Latest entry →"}
        </p>
      </div>
    );
  return (
    <Link
      to={`/${cat}/${post.slug}`}
      className={`px-6 lg:px-12 py-10 hover:bg-[#f7f5f0] transition-colors block ${border} ${align}`}
    >
      <p
        className="text-[#8c8a85] uppercase mb-2"
        style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "1.4px" }}
      >
        {dir === "prev" ? "← Previous" : "Next →"}
      </p>
      <p
        className="text-[#2c2c2c]"
        style={{ fontFamily: "'Noto Serif KR', serif", fontSize: 17 }}
      >
        {post.title}
      </p>
    </Link>
  );
}
