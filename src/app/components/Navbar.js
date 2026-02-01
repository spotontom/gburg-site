"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <nav className="navbar" aria-label="Primary navigation">
        <div className="navbar-container">
          <div className="logo-section">
            <Image
              src="/imgs/logo.jpeg"
              alt="Bearadise in the Smokies"
              className="logo-img"
              width={120}
              height={60}
              priority
            />
            <span className="site-title">Bearadise in the Smokies</span>
          </div>

          <button
            className="burger"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((v) => !v);
            }}
          >
            <span aria-hidden="true">☰</span>
          </button>

          <ul
            id="primary-nav"
            className={`nav-links ${open ? "open" : ""}`}
          >
            <li><Link href="/">Home</Link></li>
            <li><Link href="/availability">Availability</Link></li>
            <li><Link href="/nearby">Nearby &amp; Fun</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>

            <li>
              <Link href="/book" className="book-cta">
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}