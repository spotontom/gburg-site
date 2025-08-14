"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar(){
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(()=> { setOpen(false); }, [pathname]);

  return (
    <nav className="navbar" role="navigation" aria-label="Main">
      <div className="navbar-container">
        <div className="logo-section">
          <img src="/imgs/logo.jpeg" alt="Lodge Logo" className="logo-img" />
          <span className="site-title">Bearadise in the Smokies</span>
        </div>

        <button
          className="burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={(e)=>{ e.stopPropagation(); setOpen(v=>!v); }}
        >
          ☰
        </button>

        <div className={`nav-links ${open ? "open" : ""}`}>
          <Link href="/">Home</Link>
          <Link href="/availability">Availability</Link>
          <Link href="/nearby">Nearby &amp; Fun</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

          {/* Standout CTA */}
          <Link href="/book" className="book-cta" aria-label="Book your stay now">
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}