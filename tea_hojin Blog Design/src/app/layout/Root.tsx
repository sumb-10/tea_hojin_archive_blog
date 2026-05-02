import { useEffect, useState } from "react";
import { Outlet, useLocation, Link } from "react-router";
import { Menu } from "lucide-react";
import { Sidebar } from "./Sidebar";

export function Root() {
  const [drawer, setDrawer] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setDrawer(false);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#fdfcfb] flex">
      <Sidebar />

      {/* Mobile top bar */}
      <header className="lg:hidden fixed top-0 inset-x-0 h-14 bg-[#fdfcfb]/95 backdrop-blur border-b border-[#e5e2dc] z-40 flex items-center justify-between px-5">
        <button
          onClick={() => setDrawer(true)}
          aria-label="Open menu"
          className="p-1 text-[#2c2c2a]"
        >
          <Menu size={22} />
        </button>
        <Link
          to="/"
          className="uppercase text-[#2c2c2a]"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "1.6px" }}
        >
          Tea_hojin
        </Link>
        <span className="size-6" />
      </header>

      {/* Drawer */}
      {drawer && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setDrawer(false)}
            aria-hidden="true"
          />
          <div className="relative w-[86%] max-w-[360px] h-full">
            <Sidebar variant="drawer" onClose={() => setDrawer(false)} />
          </div>
        </div>
      )}

      <main className="flex-1 min-w-0 pt-14 lg:pt-0">
        <Outlet />
        <SiteFooter />
      </main>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-[#e5e2dc] py-12 text-center">
      <p
        className="text-[#8c8a85] uppercase"
        style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "1.2px" }}
      >
        © 2026 Tea_hojin Archive. All rights reserved.
      </p>
    </footer>
  );
}
