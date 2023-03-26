import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar fixed bg-base-100">
      <Link href="/" className="btn-ghost btn text-xl normal-case">
        ⚽ Lit Leagues 🔥
      </Link>
    </nav>
  );
};

export default Navbar;
