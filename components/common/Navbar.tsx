import { themeAtom } from "@/atoms/themeAtom";
import { useAtom } from "jotai";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  return (
    <nav className="navbar fixed z-50 flex flex-row items-center justify-between bg-base-100 bg-opacity-50 backdrop-blur-lg">
      <Link href="/" className="btn-ghost btn text-xl normal-case">
        ⚽ Lit Leagues 🔥
      </Link>
      <button
        className="btn-ghost btn text-xl normal-case"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "🌞" : "🌚"}
      </button>
    </nav>
  );
};

export default Navbar;
