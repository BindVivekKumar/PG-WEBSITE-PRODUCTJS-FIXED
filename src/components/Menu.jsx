import React, { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 h-14">
        {/* Brand */}
        <a href="#hero" className="text-xl md:text-2xl font-bold text-[var(--accent)]">
          Ira Living
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium text-sm md:text-base">
          <li><a href="#hero" className="hover:text-[var(--accent)]">Home</a></li>
          <li><a href="#rooms" className="hover:text-[var(--accent)]">Rooms</a></li>
          <li><a href="#facilities" className="hover:text-[var(--accent)]">Facilities</a></li>
          <li><a href="#gallery" className="hover:text-[var(--accent)]">Gallery</a></li>
          <li><a href="#enquiry-form" className="hover:text-[var(--accent)]">Enquiry</a></li>
          <li><a href="#contact" className="hover:text-[var(--accent)]">Contact</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-inner">
          <ul className="flex flex-col gap-4 px-6 py-4 text-gray-700 font-medium">
            <li><a href="#hero" onClick={() => setOpen(false)}>Home</a></li>
            <li><a href="#rooms" onClick={() => setOpen(false)}>Rooms</a></li>
            <li><a href="#facilities" onClick={() => setOpen(false)}>Facilities</a></li>
            <li><a href="#gallery" onClick={() => setOpen(false)}>Gallery</a></li>
            <li><a href="#enquiry-form" onClick={() => setOpen(false)}>Enquiry</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
