import { useMemo, useState } from "react";
import { Link, useParams, Navigate, useSearchParams } from "react-router";
import {
  CATEGORY_LABEL,
  Category,
  formatDate,
  postsByCategory,
} from "../data/posts";

const VALID: Category[] = ["tea-log", "teawares", "notes"];
const PAGE_SIZE = 10;

export default function CategoryList() {
  const { category } = useParams();
  const [sort, setSort] = useState<"latest" | "oldest">("latest");
  const [searchParams, setSearchParams] = useSearchParams();

  if (!category || !VALID.includes(category as Category)) {
    return <Navigate to="/" replace />;
  }
  const cat = category as Category;

  const all = useMemo(() => {
    const list = postsByCategory(cat);
    return sort === "latest" ? list : [...list].reverse();
  }, [cat, sort]);

  const totalPages = Math.max(1, Math.ceil(all.length / PAGE_SIZE));
  const pageParam = parseInt(searchParams.get("page") ?? "1", 10);
  const page = Math.min(Math.max(1, isNaN(pageParam) ? 1 : pageParam), totalPages);
  const posts = all.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const goPage = (p: number) => {
    if (p < 1 || p > totalPages) return;
    setSearchParams(p === 1 ? {} : { page: String(p) });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <header className="border-b border-[#e5e2dc] px-6 lg:px-12 py-8 lg:py-10 flex flex-col gap-4 lg:flex-row lg:items-baseline lg:justify-between">
        <div className="flex items-baseline gap-5">
          <h2
            className="text-[#2c2c2c]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: 28,
              letterSpacing: "0.5px",
            }}
          >
            {CATEGORY_LABEL[cat]}
          </h2>
          <span
            className="text-[#8c8a85] uppercase"
            style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "1.2px" }}
          >
            {posts.length} entries
          </span>
        </div>
        <div
          className="flex gap-5 uppercase"
          style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "1.2px" }}
        >
          {(["latest", "oldest"] as const).map((s) => (
            <button
              key={s}
              onClick={() => {
                setSort(s);
                setSearchParams({});
              }}
              className={
                sort === s
                  ? "text-[#2c2c2c] border-b border-[#2c2c2c] pb-1"
                  : "text-[#8c8a85] hover:text-[#2c2c2c] transition-colors pb-1"
              }
            >
              {s}
            </button>
          ))}
        </div>
      </header>

      <ul>
        {posts.map((p, i) => {
          const number = all.length - ((page - 1) * PAGE_SIZE + i);
          return (
          <li key={p.slug}>
            <Link
              to={`/${p.category}/${p.slug}`}
              className="grid grid-cols-[96px_1fr] sm:grid-cols-[60px_120px_1fr] lg:grid-cols-[60px_140px_1fr_140px_120px] gap-4 sm:gap-5 lg:gap-8 items-center px-5 sm:px-6 lg:px-12 py-5 sm:py-6 lg:py-7 border-b border-[#e5e2dc] hover:bg-[#f7f5f0] transition-colors"
            >
              <span
                className="hidden sm:block text-[#a8a59f]"
                style={{ fontFamily: "Inter, sans-serif", fontSize: 12, letterSpacing: "1px" }}
              >
                NO.{String(number).padStart(2, "0")}
              </span>
              <div className="aspect-[4/3] bg-[#f4f3f0] border border-[#e5e2dc] overflow-hidden">
                <img src={p.cover} alt={p.title} className="size-full object-cover" />
              </div>
              <div className="flex flex-col gap-2 min-w-0">
                <span
                  className="sm:hidden text-[#a8a59f] uppercase"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: 10, letterSpacing: "1.2px" }}
                >
                  No.{String(number).padStart(2, "0")} · {formatDate(p.date)}
                </span>
                <h3
                  className="text-[#2c2c2c] truncate"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontWeight: 500,
                    fontSize: 19,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-[#5a5854] line-clamp-2"
                  style={{
                    fontFamily: "'Noto Serif KR', serif",
                    fontSize: 14,
                    lineHeight: 1.65,
                  }}
                >
                  {p.excerpt}
                </p>
              </div>
              <span
                className="hidden lg:inline text-[#8c8a85] uppercase"
                style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "1.2px" }}
              >
                {CATEGORY_LABEL[p.category]}
              </span>
              <span
                className="hidden lg:inline text-right text-[#8c8a85] uppercase"
                style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "1.2px" }}
              >
                {formatDate(p.date)}
              </span>
            </Link>
          </li>
          );
        })}
      </ul>

      <nav
        className="flex items-center justify-center gap-2 sm:gap-3 py-10 lg:py-12"
        style={{ fontFamily: "Inter, sans-serif", fontSize: 12, letterSpacing: "1px" }}
        aria-label="Pagination"
      >
        <button
          onClick={() => goPage(page - 1)}
          disabled={page === 1}
          className="px-3 h-9 uppercase text-[#2c2c2c] disabled:text-[#cfcbc2] disabled:cursor-not-allowed hover:text-[#000]"
        >
          ← Previous
        </button>
        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => goPage(p)}
              aria-current={p === page ? "page" : undefined}
              className={`size-9 flex items-center justify-center border transition-colors ${
                p === page
                  ? "border-[#2c2c2c] text-[#2c2c2c] bg-[#f4f3f0]"
                  : "border-[#e5e2dc] text-[#8c8a85] hover:border-[#2c2c2c] hover:text-[#2c2c2c]"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
        <button
          onClick={() => goPage(page + 1)}
          disabled={page === totalPages}
          className="px-3 h-9 uppercase text-[#2c2c2c] disabled:text-[#cfcbc2] disabled:cursor-not-allowed hover:text-[#000]"
        >
          Next →
        </button>
      </nav>
    </div>
  );
}
