"use client";
import * as React from "react";

interface HeaderProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export function Header({ isMenuOpen, onToggleMenu }: HeaderProps) {
  const navItems = ["Home", "How It Works", "Rewards", "Community", "About"];

  return (
    <header className="sticky top-0 px-0 py-4 shadow-[0_2px_4px_rgba(0,0,0,0.1)] z-[100]">
      <div className="flex justify-between items-center px-5 py-0 mx-auto my-0 max-w-[1200px]">
        <img
          alt="EcoTracker Logo"
          src="https://images.pexels.com/photos/6990467/pexels-photo-6990467.jpeg"
          className="object-cover overflow-hidden w-full aspect-square"
        />
        <nav
          style={{
            "@media (max-width: 640px)": {
              display: isMenuOpen ? "block" : "none",
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "white",
              padding: "20px",
            },
          }}
        >
          <ul className="flex gap-8 max-sm:flex-col max-sm:gap-4">
            {navItems.map((item) => (
              <li key={item} className="cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="text-2xl cursor-pointer border-[none]"
          onClick={onToggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}
