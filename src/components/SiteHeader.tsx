"use client";

import { useEffect, useState } from "react";

const NAV = [
  { href: "#about", label: "公司介紹" },
  { href: "#services", label: "服務項目" },
  { href: "#locations", label: "服務據點" },
];

export default function SiteHeader() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${solid || open ? "bg-navy" : "bg-transparent"}`}
    >
      <div className="relative z-10">
      <div className="h-[3px] bg-orange" />
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-14">
        <a href="#top" className="flex items-center gap-3 text-white" onClick={close}>
          <span className="h-8 w-[3px] bg-orange" aria-hidden />
          <span>
            <span className="block text-[15px] font-medium leading-none tracking-wide">
              龍億檢驗
            </span>
            <span className="mt-1 block font-condensed text-[11px] leading-none tracking-[0.28em] text-white/60">
              LONG YI
            </span>
          </span>
        </a>

        <nav aria-label="主要" className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-orange px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-[#f06a38]"
          >
            詢價
          </a>
        </nav>

        <div className="flex items-center gap-5 lg:hidden">
          <a href="#contact" className="text-sm text-white" onClick={close}>
            詢價
          </a>
          <button
            type="button"
            className="inline-flex h-11 items-center text-sm tracking-wide text-white"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "關閉" : "選單"}
          </button>
        </div>
      </div>
      </div>

      {open ? (
        <nav
          id="site-menu"
          aria-label="手機選單"
          className="fixed inset-x-0 bottom-0 top-[calc(3px+4rem)] z-0 bg-navy px-6 pb-10 lg:hidden"
        >
          <div className="flex h-full flex-col justify-between border-t border-white/15 pt-8">
            <ul className="space-y-2">
              {[...NAV, { href: "#contact", label: "聯絡詢價" }].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block py-3 text-4xl font-medium tracking-tight text-white"
                    onClick={close}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="font-condensed text-xs tracking-[0.22em] text-white/45">
              DEMO SITE
            </p>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
