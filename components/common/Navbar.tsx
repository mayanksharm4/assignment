import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar fixed z-50 bg-base-100 bg-opacity-50 backdrop-blur-lg">
      <Link href="/" className="btn-ghost btn text-xl normal-case">
        ⚽ Lit Leagues 🔥
      </Link>
    </nav>
  );
};

export default Navbar;
