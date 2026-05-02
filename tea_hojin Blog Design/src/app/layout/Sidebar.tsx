import { NavLink, Link } from "react-router";
import { Globe, X } from "lucide-react";

const NAV: { to: string; label: string; end?: boolean }[] = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Me" },
  { to: "/tea-log", label: "Tea Log" },
  { to: "/teawares", label: "Teawares" },
  { to: "/notes", label: "Notes" },
];

export function Sidebar({
  variant = "fixed",
  onClose,
}: {
  variant?: "fixed" | "drawer";
  onClose?: () => void;
}) {
  return (
    <aside
      className={
        variant === "fixed"
          ? "hidden lg:flex bg-[#2d2d2a] flex-col w-[300px] xl:w-[360px] border-r border-[#2c2c2a] h-screen sticky top-0 shrink-0"
          : "bg-[#2d2d2a] flex flex-col w-full h-full"
      }
    >
      <div className="border-b border-[#40403c] px-10 xl:px-12 pt-10 xl:pt-12 pb-6 flex items-start justify-between">
        <Link to="/" onClick={onClose}>
          <p
            className="text-[#f0eee5]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: 36,
              lineHeight: 1.1,
              letterSpacing: "-0.5px",
            }}
          >
            Tea_hojin
            <br />
            Archive
          </p>
        </Link>
        {variant === "drawer" && (
          <button onClick={onClose} className="text-[#f0eee5] p-1" aria-label="Close menu">
            <X size={22} />
          </button>
        )}
      </div>

      <div className="border-b border-[#40403c] px-10 xl:px-12 py-6">
        <p
          className="text-[#c3b9a2]"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 13,
            lineHeight: 1.55,
            letterSpacing: "0.2px",
          }}
        >
          A personal magazine of tea,
          <br />
          teaware, quiet taste,
          <br />
          and collected notes.
        </p>
      </div>

      <nav className="flex-1 flex flex-col gap-7 px-10 xl:px-12 py-10 xl:py-12">
        {NAV.map((n) => (
          <NavLink
            key={n.to}
            to={n.to}
            end={n.end}
            onClick={onClose}
            className="group flex items-center gap-3"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: 22,
              lineHeight: 1.1,
            }}
          >
            {({ isActive }) => (
              <>
                <span
                  className={
                    isActive
                      ? "text-[#f0eee5]"
                      : "text-[#f0eee5]/75 group-hover:text-[#f0eee5] transition-colors"
                  }
                >
                  {n.label}
                </span>
                {isActive && <span className="h-px w-6 bg-[#c3b9a2]" />}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-[#40403c] px-10 xl:px-12 py-7 flex items-center gap-3">
        <span className="size-9 rounded-full border border-[#e8e6e1]/30 flex items-center justify-center">
          <Globe size={16} className="text-[#e8e6e1]" />
        </span>
        <span
          className="text-[#f0eee5] uppercase"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: 16,
            letterSpacing: "0.4px",
          }}
        >
          @tea_hojin
        </span>
      </div>
    </aside>
  );
}
