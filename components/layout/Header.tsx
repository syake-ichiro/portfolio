"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#profile", label: "Profile" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] backdrop-blur-[16px] border-b transition-[background-color,border-color] duration-300 ${
        scrolled
          ? "bg-[rgba(250,247,242,0.85)] border-[var(--border)]"
          : "bg-[rgba(10,10,12,0.35)] border-transparent"
      }`}
    >
      <div className="max-w-content mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className={`inline-flex items-center gap-[10px] font-bold text-[16px] tracking-[.02em] transition-colors duration-300 ${
            scrolled ? "text-[var(--text)]" : "text-white"
          }`}
        >
          <Image
            src="/icon.svg"
            alt=""
            width={28}
            height={28}
            className="rounded-[6px] object-contain flex-shrink-0"
          />
          <span>
            SYAKE
            <i className="not-italic text-[var(--accent-coral)]">.</i>
            ICHIRO
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-7 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link relative text-[13px] font-medium transition-colors duration-[250ms] ${
                scrolled
                  ? "text-[var(--text-mute)] hover:text-[var(--text)]"
                  : "text-[rgba(255,255,255,0.75)] hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className={`md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] ${
            scrolled ? "text-[var(--text)]" : "text-white"
          }`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          <span
            className={`block w-5 h-px bg-current transition-transform duration-300 origin-center ${
              isOpen ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-current transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-current transition-transform duration-300 origin-center ${
              isOpen ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64" : "max-h-0"
        } ${
          scrolled
            ? "bg-[rgba(250,247,242,0.95)]"
            : "bg-[rgba(10,10,12,0.85)]"
        }`}
      >
        <div className="max-w-content mx-auto px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-[15px] font-medium transition-colors duration-[250ms] ${
                scrolled
                  ? "text-[var(--text-mute)] hover:text-[var(--text)]"
                  : "text-[rgba(255,255,255,0.75)] hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
